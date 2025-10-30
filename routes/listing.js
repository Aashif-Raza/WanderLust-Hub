const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    validateListing,
    upload.single("listing[image]"),
    wrapAsync(listingController.createListing)
  );

//New Route.................
router.get("/new", isLoggedIn, listingController.renderNewForm);

// ✅ Put search route BEFORE routes with :id
router.get("/search", async (req, res) => {
  const { q } = req.query;
  try {
    if (!q || q.trim() === "") {
      const listings = await Listing.find({});
      return res.render("listings/index.ejs", { allListings: listings });
    }

    const regex = new RegExp(q, "i");
    const listings = await Listing.find({
      $or: [
        { title: regex },
        { location: regex },
        { country: regex },
        { category: regex },
      ],
    });

    res.render("listings/index.ejs", { allListings: listings, searchQuery: q });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error performing search");
  }
});

// ✅ Category API route
router.get("/api/category/:category", async (req, res) => {
  const { category } = req.params;
  try {
    const listings = await Listing.find({ category });
    res.json(listings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

//Edit Route..................
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

router.get(
  "/:id/book",
  isLoggedIn,
  wrapAsync(listingController.bookNow)
);


module.exports = router;

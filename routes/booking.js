const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/listings");
const { isLoggedIn, isLoggedInToBook } = require("../middleware.js");

router.post("/:id",isLoggedInToBook, bookingController.bookNow);

module.exports = router;

const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/listings");

router.post("/:id", bookingController.bookNow);

module.exports = router;

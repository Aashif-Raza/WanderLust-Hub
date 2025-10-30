// routes/auth.js
const express = require("express");
const passport = require("passport");
const router = express.Router();

// --- Google ---
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    req.flash("success", "Welcome via Google!");
    res.redirect("/listings");
  }
);



module.exports = router;

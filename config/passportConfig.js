// // config/passportConfig.js
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const User = require("../models/user");

// // Local Strategy
// passport.use(new LocalStrategy(User.authenticate()));

// // Serialize/Deserialize
// passport.serializeUser((user, done) => done(null, user.id));
// passport.deserializeUser(async (id, done) => {
//   const user = await User.findById(id);
//   done(null, user);
// });

// // GOOGLE
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "/auth/google/callback",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       let user = await User.findOne({ googleId: profile.id });
//       if (!user) {
//         user = await User.create({
//           username: profile.displayName,
//           email: profile.emails[0].value,
//           googleId: profile.id,
//         });
//       }
//       done(null, user);
//     }
//   )
// );



// module.exports = passport;






const passport = require("passport");
const LocalStrategy = require("passport-local");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user");

// Local Strategy
passport.use(new LocalStrategy(User.authenticate()));

// Serialize/Deserialize
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// Determine callback URL based on environment
const callbackURL =
  process.env.NODE_ENV === "production"
    ? "https://wanderlust-hub-ys3m.onrender.com/auth/google/callback"
    : "http://localhost:8080/auth/google/callback";

// GOOGLE Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL, // 👈 now dynamically uses correct URL
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = await User.create({
            username: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
          });
        }
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

module.exports = passport;

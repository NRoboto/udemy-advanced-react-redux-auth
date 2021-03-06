const express = require("express");
const passport = require("passport");
const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

const router = express.Router();

router.get("/", requireAuth, (req, res) => res.send("Hello!"));
router.post("/signin", requireSignin, Authentication.signin);
router.post("/signup", Authentication.signup);

module.exports = router;

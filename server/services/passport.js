const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const config = require("../config");

const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(
  localOptions,
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) return done(null, false);

      const isMatch = await user.comparePassword(password);
      if (!isMatch) return done(null, false);

      return done(null, user);
    } catch (e) {
      return done(e);
    }
  }
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret,
};

const jwtLogin = new Strategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.findById(payload.sub);

    if (!user) return done(null, false);

    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
});

passport.use(jwtLogin);
passport.use(localLogin);

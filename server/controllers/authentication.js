const jwt = require("jsonwebtoken");
const User = require("../models/user");
const config = require("../config");

const tokenForUser = (user) => {
  const iat = new Date().getTime();
  return jwt.sign({ sub: user.id, iat }, config.secret);
};

const signin = async (req, res) => {
  res.send({ token: tokenForUser(req.user) });
};

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) return res.status(422).send({ error: "Email already in use" });

    const newUser = new User({
      email,
      password,
    });
    await newUser.save();
    res.send({ token: tokenForUser(newUser) });
  } catch (e) {
    res.send({ error: e });
  }
};

module.exports = {
  signup,
  signin,
};

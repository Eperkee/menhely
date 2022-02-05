const User = require("../../models/User");
const CryptoJS = require("crypto-js");

const userUpload = async (req, res) => {
  const nev = req.body.nev;
  const email = req.body.email;
  const password = CryptoJS.AES.encrypt(
    req.body.password,
    process.env.CRYPTO_KEY
  ).toString();

  try {
    const newUser = new User({ nev, email, password });
    const user = await newUser.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { userUpload };

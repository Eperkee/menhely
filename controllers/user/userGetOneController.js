const User = require("../../models/User");

const oneUser = async (req, res) => {
  try {
    const nev = req.params.nev;
    const user = await User.findOne({ nev });

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { oneUser };

const User = require("../../models/User");

const deleteUser = async (req, res) => {
  try {
    const nev = req.params.nev;
    const user = await User.findOneAndDelete({ nev });

    res.status(200).json({ msg: "Sikeres törlés!" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { deleteUser };

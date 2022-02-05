const express = require("express");
const { deleteUser } = require("../controllers/user/userDeleteController");
const { allUser } = require("../controllers/user/userGetallController");
const { oneUser } = require("../controllers/user/userGetOneController");
const { userUpload } = require("../controllers/user/userPostController");
const router = express.Router();
const User = require("../models/User");

// Összes felhasználó lekérdezése
router.get("/", allUser);

// Felhasználó feltöltése
router.post("/feltolt", userUpload);

// Név alapján szűrés felhasználóra
router.get("/letolt/:nev", oneUser);

// Név alapján felhasználó törlése
router.delete("/torol/:nev", deleteUser);

// Felhasználói információk frissítése
router.patch("/frissit", async (req, res) => {
  try {
    const user = req.body;
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;

const express = require("express");
const path = require("path");
const router = express.Router();
const multer = require("multer");
const Book = require("../models/Book");

// Multer beállítása
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "kliens/public/kepek");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorage });

router.post("/feltolt", upload.single("kep"), async (req, res) => {
  const szerzo = req.body.szerzo;
  const cim = req.body.cim;
  const kep = req.file.originalname;

  try {
    const newBook = new Book({ szerzo, cim, kep });
    const konyv = await newBook.save();
    res.redirect("/");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;

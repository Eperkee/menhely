const express = require("express");
const path = require("path");
const router = express.Router();
const multer = require("multer");
const Book = require("../models/Book");

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Multer beállítása
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "kliens/public/kepek");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorage });

router.post("/feltolt", upload.single("kep"), async (req, res) => {
  const szerzo = req.body.szerzo;
  const cim = req.body.cim;
  const kategoria = req.body.kategoria;
  const ar = req.body.ar;
  const kep = req.file.originalname;

  try {
    const newBook = new Book({ szerzo, cim, kategoria, ar, kep });
    const konyv = await newBook.save();
    res.redirect("/feltoltes");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.delete("/torol/:kep", async (req, res) => {
  try {
    const kep = req.params.kep;
    console.log(kep);
    const user = await Book.findOneAndDelete({ kep });
    // res.redirect("/");
    console.log(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Kartya = require("../models/Kartya");

router.get("/", async (req, res) => {
  try {
    const kartyak = await Kartya.find();
    console.log(kartyak);
    res.status(200).json(kartyak);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post("/feltolt", async (req, res) => {
  const szerzo = req.body.szerzo;
  const cim = req.body.cim;
  const kep = req.body.kep;

  try {
    const newKartya = new Kartya({ szerzo, cim, kep });

    const kartya = await newKartya.save();
    res.status(200).json(kartya);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;

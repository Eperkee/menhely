const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    nev: {
      type: String,
      required: true,
    },
    kor: {
      type: Number,
      required: true,
    },
    fajta: {
      type: String,
      required: true,
    },
    ivartalanitott: {
      type: String,
      required: true,
    },
    kep: {
      type: String,
    },
  },
  { timestamps: true }
);

const BookModel = mongoose.model("books", BookSchema);

module.exports = BookModel;

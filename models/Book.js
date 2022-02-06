const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    szerzo: {
      type: String,
      required: true,
    },
    cim: {
      type: String,
      required: true,
    },
    kategoria: {
      type: String,
      required: true,
    },
    ar: {
      type: Number,
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

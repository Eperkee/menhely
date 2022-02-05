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
    kep: {
      type: String,
    },
  },
  { timestamps: true }
);

const BookModel = mongoose.model("book", BookSchema);

module.exports = BookModel;

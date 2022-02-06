const mongoose = require("mongoose");

const KartyaSchema = new mongoose.Schema(
  {
    konyvek: Array,
    osszar: Number,
  },
  { timestamps: true }
);

const KartyaModel = mongoose.model("kartyas", KartyaSchema);

module.exports = KartyaModel;

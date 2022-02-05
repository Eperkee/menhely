const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();

// Adatbázis kapcsolat
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Sikeres adatbázis csatlakozás!");
  })
  .catch((err) => {
    console.log(`Valami hiba történt: ${err.message}`);
  });

// Middleware-k
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// Route-ok
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/book", require("./routes/bookRoute"));

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`A szerver fut a következő porton: http://localhost:${PORT}`);
});

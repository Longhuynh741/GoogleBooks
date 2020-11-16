require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes/api/user");
const router = require("./routes/api");
const app = express();


const PORT = process.env.PORT || 3001;

app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/my-mern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.use(router);

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});

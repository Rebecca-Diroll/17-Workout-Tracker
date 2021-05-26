// Dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// Set up Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api"));
app.use(require("./routes/html_routes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
const mongoose = require("mongoose");
const validator = require("validator");

const Movie = mongoose.model("Movie", {
  title: {
    type: String,
    required: true,
    trim: true,
  },
  genre: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = Movie;

const mongoose = require("mongoose");
const validator = require("validator");

const Book = mongoose.model("Book", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
    trim: true,
  },
});

module.exports = Book;

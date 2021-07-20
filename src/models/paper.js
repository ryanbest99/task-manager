const mongoose = require("mongoose");
const validator = require("validator");

const Paper = mongoose.model("Paper", {
  company: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = Paper;

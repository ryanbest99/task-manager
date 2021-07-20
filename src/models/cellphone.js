const mongoose = require("mongoose");
const validator = require("validator");

const Cellphone = mongoose.model("Cellphone", {
  brand: {
    type: String,
    trim: true,
    required: true,
  },
  model: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
  },
  year: {
    type: Number,
    trim: true,
    required: true,
  },
});

module.exports = Cellphone;

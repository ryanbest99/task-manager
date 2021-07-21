const mongoose = require("mongoose");
const validator = require("validator");

const PhoneSchema = mongoose.Schema({
  brand: {
    type: String,
    trim: true,
    required: true,
    uppercase: true,
  },
  model: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Phone", PhoneSchema);

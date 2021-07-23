const mongoose = require("mongoose");

const LuxurySchema = new mongoose.Schema({
  brand: {
    type: String,
    trim: true,
    uppercase: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  type: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Luxury", LuxurySchema);

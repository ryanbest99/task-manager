const mongoose = require("mongoose");
const validator = require("validator");

const VehicleSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  year: {
    type: Number,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Vehicle", VehicleSchema);

const mongoose = require("mongoose");
const validator = require("validator");

const BankSchema = new mongoose.Schema({
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
  chairman: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Bank", BankSchema);

// const Bank = mongoose.model("Bank", {
//   name: {
//     type: String,
//     trim: true,
//     required: true,
//   },
//   year: {
//     type: Number,
//     trim: true,
//     required: true,
//   },
//   chairman: {
//     type: String,
//     trim: true,
//     required: true,
//   },
// });

// module.exports = Bank;

const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is not valid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.length < 7) {
        throw new Error("Password Length Must be longer than 6");
      } else if (value.toLowerCase().includes("password")) {
        throw new Error("You must NOT include 'password' in your password");
      }
    },
  },
});

module.exports = User;

// const minsu = new User({
//   name: "minsu",
//   email: "asdf@asd.com",
//   password: "Password1",
// });

// minsu
//   .save()
//   .then(() => {
//     console.log(minsu);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

require("../db/mongoose");
const User = require("../models/user");

User.findByIdAndUpdate("60f508ab7aa9b743bcccdd59", { name: "Rian" })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ name: "Rian" });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

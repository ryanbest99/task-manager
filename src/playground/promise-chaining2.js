require("../db/mongoose");
const Task = require("../models/task");

// Task.findByIdAndUpdate("60f676d9be0a0050785b56fd", {
//   description: "Cleaning",
// })
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ description: "Cleaning" });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const updateAgeandCount = async (id, description) => {
  const task = await Task.findByIdAndUpdate(id, { description: description });
  const count = await Task.countDocuments({ description: description });
  console.log(task);
  return count;
};

updateAgeandCount("60f523f23296bb529c66c049", "Sweeping")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

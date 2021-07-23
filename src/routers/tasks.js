const router = require("express").Router();
const Task = require("../models/task");

// Tasks
router.post("/tasks", async (req, res) => {
  const newTask = new Task(req.body);

  try {
    const task = await newTask.save();
    console.log(task);
    res.status(201).send(task);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }

  //   task
  //     .save()
  //     .then(() => {
  //       console.log(task);
  //       res.status(201).send(task);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
});

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (err) {
    res.status(500).send();
  }

  //   Task.find({})
  //     .then((tasks) => {
  //       res.send(tasks);
  //       console.log(tasks);
  //     })
  //     .catch((err) => {
  //       res.status(500).send();
  //     });
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (err) {
    res.status(500).send();
  }

  //   Task.findById(req.params.id)
  //     .then((task) => {
  //       if (!task) {
  //         return res.status(404).send();
  //       }
  //       res.send(task);
  //       console.log(task);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(500).send();
  //     });
});

router.patch("/tasks/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid Updates" });
  }

  try {
    const task = await Task.findById(req.params.id);
    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();

    // const task = await Task.findByIdAndUpdate(
    //   req.params.id,
    //   { $set: req.body },
    //   { new: true, runValidatros: true }
    // );

    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (err) {
    res.status(400).send(err);
  }

  //   const task = Task.findByIdAndUpdate(
  //     req.params.id,
  //     { $set: req.body },
  //     { new: true, runValidators: true }
  //   )
  //     .then((task) => {
  //       if (!task) {
  //         return res.status(404).send();
  //       }
  //       res.send(task);
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err);
  //     });
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (err) {
    res.status(400).send();
  }

  //   Task.findByIdAndDelete(req.params.id)
  //     .then((task) => {
  //       if (!task) {
  //         return res.status(404).send();
  //       }

  //       res.send(task);
  //     })
  //     .catch((err) => {
  //       res.status(400).send();
  //     });
});

module.exports = router;

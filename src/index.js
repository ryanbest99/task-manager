const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send(err);
  }

  //   user
  //     .save()
  //     .then(() => {
  //       console.log(user);
  //       res.send(user);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(400).send(err);
  //     });
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send();
  }

  //   User.find({})
  //     .then((users) => {
  //       res.send(users);
  //       console.log(users);
  //     })
  //     .catch((err) => {
  //       res.status(500).send();
  //     });
});

app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
    console.log(user);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }

  //   User.findById(req.params.id)
  //     .then((user) => {
  //       if (!user) {
  //         return res.status(404).send();
  //       }
  //       res.send(user);
  //       console.log(user);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(500).send();
  //     });
});

app.post("/tasks", async (req, res) => {
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

app.get("/tasks", async (req, res) => {
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

app.get("/tasks/:id", async (req, res) => {
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

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

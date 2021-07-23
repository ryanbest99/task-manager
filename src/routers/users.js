const express = require("express");
const User = require("../models/user");
const router = new express.Router();

// Users
router.post("/users", async (req, res) => {
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

router.get("/users", async (req, res) => {
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

router.get("/users/:id", async (req, res) => {
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

router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  console.log(updates);
  const allowedUpdates = ["name", "email", "password"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid Updates" });
  }

  try {
    const user = await User.findById(req.params.id);
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();

    // const user = await User.findByIdAndUpdate(
    //   req.params.id,
    //   { $set: req.body },
    //   { new: true, runValidators: true }
    // );

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }

  //   const user = User.findByIdAndUpdate(
  //     req.params.id,
  //     { $set: req.body },
  //     { new: true, runValidators: true }
  //   )
  //     .then((user) => {
  //       if (!user) {
  //         return res.status(404).send();
  //       }
  //       res.send(user);
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err);
  //     });
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (err) {
    res.status(500).send();
  }

  //   User.findByIdAndDelete(req.params.id)
  //     .then((user) => {
  //       if (!user) {
  //         res.status(404).send();
  //       }

  //       res.send(user);
  //     })
  //     .catch((err) => {
  //       res.status(400).send();
  //     });
});

module.exports = router;

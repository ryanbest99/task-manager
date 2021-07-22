const express = require("express");
require("./db/mongoose");
const Phone = require("./models/phone");
const userRouter = require("./routers/users");
const taskRouter = require("./routers/tasks");
const vehicleRouter = require("./routers/vehicles");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
app.use(vehicleRouter);

// Phones
app.post("/phones", async (req, res) => {
  const newPhone = new Phone(req.body);

  try {
    const phone = await newPhone.save();
    res.status(200).send(phone);
  } catch (err) {
    res.status(500).send(err);
  }

  //   newPhone
  //     .save()
  //     .then((newPhone) => {
  //       console.log(newPhone);
  //       res.status(200).send(newPhone);
  //     })
  //     .catch((err) => {
  //       res.status(500).send(err);
  //     });
});

app.get("/phones", async (req, res) => {
  try {
    const phones = await Phone.find({});
    console.log(phones);
    res.send(phones);
  } catch (err) {
    res.status(500).send();
  }

  //   const phones = Phone.find({})
  //     .then((phones) => {
  //       console.log(phones);
  //       res.status(201).send(phones);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(500).send();
  //     });
});

app.get("/phones/:id", async (req, res) => {
  try {
    const phone = await Phone.findById(req.params.id);

    if (!phone) {
      return res.status(404).send();
    }

    res.send(phone);
  } catch (err) {
    res.status(500).send(err);
  }

  //   Phone.findById(req.params.id)
  //     .then((phone) => {
  //       if (!phone) {
  //         return res.status(404).send();
  //       }
  //       res.status(200).send(phone);
  //     })
  //     .catch((err) => {
  //       res.status(500).send();
  //     });
});

app.patch("/phones/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["brand", "model"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid Updates" });
  }

  try {
    const phone = await Phone.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!phone) {
      return res.status(404).send();
    }

    res.send(phone);
  } catch (err) {
    res.status(400).send(err);
  }

  //   Phone.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
  //     .then((phone) => {
  //       if (!phone) {
  //         return res.status(404).send();
  //       }
  //       res.send(phone);
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err);
  //     });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

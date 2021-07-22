const router = require("express").Router();
const Vehicle = require("../models/Vehicle");

router.post("/vehicles", async (req, res) => {
  const newVehicle = new Vehicle(req.body);

  try {
    const vehicle = await newVehicle.save();
    res.status(201).send(vehicle);
  } catch (err) {
    res.status(500).send(err);
  }

  //   newVehicle
  //     .save()
  //     .then((vehicle) => {
  //       console.log(vehicle);
  //       res.status(200).send(vehicle);
  //     })
  //     .catch((err) => {
  //       res.status(500).send(err);
  //     });
});

router.get("/vehicles", async (req, res) => {
  try {
    const vehicles = await Vehicle.find({});
    res.send(vehicles);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/vehicles/:id", async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    res.status(200).send(vehicle);
  } catch (err) {
    res.status(400).send();
  }
});

router.patch("/vehicles/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["manufacturer", "name", "year"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid Updates" });
  }

  try {
    const vehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).send(vehicle);
  } catch (err) {
    res.status(404).send();
  }
});

router.delete("/vehicles/:id", async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (!vehicle) {
      return res.status(404).send();
    }
    res.send(vehicle);
  } catch (err) {
    res.status(400).send();
  }
});

module.exports = router;

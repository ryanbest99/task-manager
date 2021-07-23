const router = require("express").Router();
const Luxury = require("../models/Luxury");

// Create Luxury
router.post("/luxuries", async (req, res) => {
  try {
    const newLuxury = await new Luxury(req.body).save();
    res.status(200).send(newLuxury);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Read all luxuries
router.get("/luxuries", async (req, res) => {
  try {
    const luxuries = await Luxury.find({});
    res.status(200).send(luxuries);
  } catch (err) {
    res.status(400).send();
  }
});

// Find a luxury
router.get("/luxuries/:id", async (req, res) => {
  try {
    const luxury = await Luxury.findById(req.params.id);
    if (!luxury) {
      return res.status(404).send();
    }

    res.status(200).send(luxury);
  } catch (err) {
    res.status(500).send();
  }
});

// Update a luxury
router.patch("/luxuries/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["brand", "name", "type"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(404).send({ error: "Invalid Updates" });
  }

  try {
    const luxury = await Luxury.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!luxury) {
      return res.status(404).send();
    }

    res.send(luxury);
  } catch (err) {
    res.status(500).send();
  }
});

// Delete a luxury
router.delete("/luxuries/:id", async (req, res) => {
  try {
    const luxury = await Luxury.findByIdAndDelete(req.params.id);

    if (!luxury) {
      return res.status(404).send();
    }

    res.send(luxury);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;

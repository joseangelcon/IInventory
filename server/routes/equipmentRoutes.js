const express = require("express");
const Equipment = require("../models/equipment"); // Adjust the path as needed

const router = express.Router();

// GET all equipment
router.get("/equipment", async (req, res) => {
  try {
    const equipment = await Equipment.find();
    res.json(equipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new equipment
router.post("/equipment", async (req, res) => {
  const equipment = new Equipment({
    name: req.body.name,
    description: req.body.description,
    // ... other fields
  });

  try {
    const newEquipment = await equipment.save();
    res.status(201).json(newEquipment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ... define other routes (PUT, DELETE) as needed

module.exports = router;

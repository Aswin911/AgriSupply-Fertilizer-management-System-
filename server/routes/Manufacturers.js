const express = require("express");
const router = express.Router();
const { Manufacturers } = require("../models");

// Get all manufacturers
router.get("/", async (req, res) => {
  try {
    const manufacturers = await Manufacturers.findAll();
    res.json(manufacturers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch manufacturers" });
  }
});

// Get a single manufacturer by ID
router.get("/:id", async (req, res) => {
  try {
    const manufacturer = await Manufacturers.findByPk(req.params.id);
    if (manufacturer) {
      res.json(manufacturer);
    } else {
      res.status(404).json({ error: "Manufacturer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch manufacturer" });
  }
});

// Add a new manufacturer
router.post("/", async (req, res) => {
  try {
    const newManufacturer = await Manufacturers.create(req.body);
    res.json(newManufacturer);
  } catch (error) {
    res.status(500).json({ error: "Failed to add manufacturer" });
  }
});

// Update a manufacturer's details
router.put("/:id", async (req, res) => {
  try {
    const manufacturer = await Manufacturers.findByPk(req.params.id);
    if (manufacturer) {
      await manufacturer.update(req.body);
      res.json(manufacturer);
    } else {
      res.status(404).json({ error: "Manufacturer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update manufacturer" });
  }
});

// Delete a manufacturer
router.delete("/:id", async (req, res) => {
  try {
    const manufacturer = await Manufacturers.findByPk(req.params.id);
    if (manufacturer) {
      await manufacturer.destroy();
      res.json({ message: "Manufacturer deleted" });
    } else {
      res.status(404).json({ error: "Manufacturer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete manufacturer" });
  }
});

module.exports = router;
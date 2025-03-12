const express = require("express");
const router = express.Router();
const { Farmers } = require("../models");

// Get all farmers
router.get("/", async (req, res) => {
  try {
    const farmers = await Farmers.findAll();
    res.json(farmers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch farmers" });
  }
});

// Get a single farmer by ID
router.get("/:id", async (req, res) => {
  try {
    const farmer = await Farmers.findByPk(req.params.id);
    if (farmer) {
      res.json(farmer);
    } else {
      res.status(404).json({ error: "Farmer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch farmer" });
  }
});

// Add a new farmer
router.post("/", async (req, res) => {
  try {
    const newFarmer = await Farmers.create(req.body);
    res.json(newFarmer);
  } catch (error) {
    res.status(500).json({ error: "Failed to add farmer" });
  }
});

// Update a farmer's details
router.put("/:id", async (req, res) => {
  try {
    const farmer = await Farmers.findByPk(req.params.id);
    if (farmer) {
      await farmer.update(req.body);
      res.json(farmer);
    } else {
      res.status(404).json({ error: "Farmer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update farmer" });
  }
});

// Delete a farmer
router.delete("/:id", async (req, res) => {
  try {
    const farmer = await Farmers.findByPk(req.params.id);
    if (farmer) {
      await farmer.destroy();
      res.json({ message: "Farmer deleted" });
    } else {
      res.status(404).json({ error: "Farmer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete farmer" });
  }
});

module.exports = router;
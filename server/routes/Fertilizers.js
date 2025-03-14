const express = require("express");
const router = express.Router();
const { Fertilizers } = require("../models");

// Get all fertilizers
router.get("/", async (req, res) => {
  try {
    const fertilizers = await Fertilizers.findAll();
    res.json(fertilizers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch fertilizers" });
  }
});

// Get a single fertilizer by ID
router.get("/:id", async (req, res) => {
  try {
    const fertilizer = await Fertilizers.findByPk(req.params.id);
    if (fertilizer) {
      res.json(fertilizer);
    } else {
      res.status(404).json({ error: "Fertilizer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch fertilizer" });
  }
});

// Add a new fertilizer
router.post("/", async (req, res) => {
    try {
      console.log("Received request body:", req.body); // Debugging: Check data coming from frontend
      const newFertilizer = await Fertilizers.create(req.body);
      res.json(newFertilizer);
    } catch (error) {
      console.error("Failed to add fertilizer:", error);
      res.status(500).json({ error: "Failed to add fertilizer" });
    }
  });


// Update a fertilizer's details
router.put("/:id", async (req, res) => {
  try {
    console.log(`Updating fertilizer with ID: ${req.params.id}`);
    console.log('Request body:', req.body);
    const fertilizer = await Fertilizers.findByPk(req.params.id);
    if (fertilizer) {
      await fertilizer.update(req.body);
      res.json(fertilizer);
    } else {
      res.status(404).json({ error: "Fertilizer not found" });
    }
  } catch (error) {
    console.error('Failed to update fertilizer:', error);
    res.status(500).json({ error: "Failed to update fertilizer" });
  }
});


// Delete a fertilizer
router.delete("/:id", async (req, res) => {
  try {
    const fertilizer = await Fertilizers.findByPk(req.params.id);
    if (fertilizer) {
      await fertilizer.destroy();
      res.json({ message: "Fertilizer deleted" });
    } else {
      res.status(404).json({ error: "Fertilizer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete fertilizer" });
  }
});

module.exports = router;
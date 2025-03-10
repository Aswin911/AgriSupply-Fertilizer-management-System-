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

// Add a new farmer
router.post("/", async (req, res) => {
  try {
    const newFarmer = await Farmers.create(req.body);
    res.json(newFarmer);
  } catch (error) {
    res.status(500).json({ error: "Failed to add farmer" });
  }
});

module.exports = router;
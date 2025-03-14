const express = require("express");
const router = express.Router();
const { Users } = require("../models");

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Get a single user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

// Add a new user
router.post("/", async (req, res) => {
  try {
    const newUser = await Users.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to add user" });
  }
});

// Update a user's details
router.put("/:id", async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
});

// Delete a user
router.delete("/:id", async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.json({ message: "User deleted" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
});

module.exports = router;
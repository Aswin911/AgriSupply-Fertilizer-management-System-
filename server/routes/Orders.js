const express = require("express");
const router = express.Router();
const { Orders, Fertilizers } = require("../models");

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Orders.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// Get a single order by ID
router.get("/:id", async (req, res) => {
  try {
    const order = await Orders.findByPk(req.params.id);
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch order" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { Farmer_ID, Fertilizer_ID, Order_Quantity, Order_Status, Order_Date, Delivery_Date } = req.body;
    
    // Fetch the fertilizer details to get its name and update stock quantity
    const fertilizer = await Fertilizers.findByPk(Fertilizer_ID);
    if (!fertilizer) {
      return res.status(404).json({ error: "Fertilizer not found" });
    }

    if (Order_Quantity > fertilizer.Stock_Quantity) {
      return res.status(400).json({ error: "Order quantity exceeds available stock" });
    }

    const newOrder = await Orders.create({
      Farmer_ID,
      Fertilizer_ID,
      Fertilizer_Name: fertilizer.Fertilizer_Name, // Ensure this is included
      Order_Quantity,
      Order_Status,
      Order_Date,
      Delivery_Date,
    });

    // Update the stock quantity
    fertilizer.Stock_Quantity -= Order_Quantity;
    await fertilizer.save();

    res.status(201).json(newOrder);  // Send response with status 201
  } catch (error) {
    console.error("Error adding order:", error);
    res.status(500).json({ error: "Failed to add order" });
  }
});

// Update an order's details
router.put("/:id", async (req, res) => {
  try {
    const order = await Orders.findByPk(req.params.id);
    if (order) {
      await order.update(req.body);
      res.json(order);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update order" });
  }
});

// Delete an order
router.delete("/:id", async (req, res) => {
  try {
    const order = await Orders.findByPk(req.params.id);
    if (order) {
      await order.destroy();
      res.json({ message: "Order deleted" });
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete order" });
  }
});

module.exports = router;
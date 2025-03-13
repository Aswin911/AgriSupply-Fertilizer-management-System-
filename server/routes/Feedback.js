const express = require('express');
const router = express.Router();
const { Feedback } = require('../models'); // Adjust the path as necessary

// POST route to submit feedback
router.post('/', async (req, res) => {
  try {
    const feedback = await Feedback.create(req.body);
    res.status(201).send(feedback);
  } catch (error) {
    res.status(400).send({ error: 'Failed to submit feedback' });
  }
});

// GET route to fetch all feedback
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll();
    res.status(200).send(feedbacks);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch feedback' });
  }
});

module.exports = router;
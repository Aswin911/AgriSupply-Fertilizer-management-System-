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

// DELETE route to delete feedback by ID
router.delete('/:id', async (req, res) => {
  try {
    const feedback = await Feedback.findByPk(req.params.id);
    if (feedback) {
      await feedback.destroy();
      res.status(200).send({ message: 'Feedback deleted' });
    } else {
      res.status(404).send({ error: 'Feedback not found' });
    }
  } catch (error) {
    res.status(500).send({ error: 'Failed to delete feedback' });
  }
});

module.exports = router;
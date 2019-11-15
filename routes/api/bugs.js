const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Bug Model
const Bug = require('../../models/Bug');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/:id', (req, res) => {
  Bug.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Private
router.post('/:id', auth, (req, res) => {
  const newBug = new Bug({
    name: req.body.name,
    description: req.body.description 
  });

  newBug.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Bug.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;

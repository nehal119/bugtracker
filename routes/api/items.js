const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Item = require('../../models/Item');
const Bug = require('../../models/Bug');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

router.get('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Private
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    coordinator: req.body.coordinator,
    description: req.body.description,
    numberOfBugs: 0
  });
  newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
  Bug.deleteMany({projectId: req.params.id})
    .then(() => res.json({success: true}))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;

const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Bug Model
const Bug = require('../../models/Bug');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/:id', (req,res) => {
  Bug.find({projectId: req.params.id})
      .then(bugs => res.json(bugs));
});

router.get('/:projectId/:bugId', (req,res) => {
  Bug.findById(req.params.bugId)
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Private
router.post('/:id', (req, res) => {
  const newBug = new Bug({
      name: req.body.name,
      description: req.body.description,
      projectId: req.params.id,
      date: new Date()
  });
  newBug.save()
      .then(bug => res.json(bug))
      .catch(()=> res.json({sucess: false}))
})

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id/:bugId', (req, res) => {
  Bug.findById(req.params.bugId)
      .then(item => item.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}));
})

module.exports = router;

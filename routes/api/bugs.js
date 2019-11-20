const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
let increment = 0;

// Bug Model
const Bug = require('../../models/Bug');

const Item = require('../../models/Item')

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/:id', (req,res) => {
  Bug.find({projectId: req.params.id})
      .then(bugs => res.json(bugs));
});


router.get('/getNumberOfBugs/:id', (req,res) => {
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
      reporter: req.body.reporter,
      level: req.body.level,
      description: req.body.description,
      projectId: req.params.id,
      date: new Date()
  });  
  newBug.save()
      .then(bug => res.json(bug))
      .catch(()=> res.json({sucess: false}))

  // Item.updateOne({'_id': req.params.id}, {'numberOfBugs': increment + 100})
  //         .then(console.log("HI"))
  //         .catch(console.log("MY BAD"))
  // Item.updateOne({_id: "5dd5238d6eca0c34fcfbc5e9"}, {$set: {description:"NO Laptop"}})
  Item.findOne({_id: req.params.id}, function(err, foundObject) {
    if(err){
      console.log(err)
    }else{
      foundObject.numberOfBugs = foundObject.numberOfBugs + 1
      foundObject.save(function(err, updatedObject){
        if(err){
          console.log(err)
        }else{
          console.log(updatedObject)
        }
      })
    }
  })
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

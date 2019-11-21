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

  Item.findOne({_id: req.params.id}, function(err, foundObject) {
    if(err){
      console.log(err)
    }else{
      foundObject.numberOfBugs = foundObject.numberOfBugs + 1
      foundObject.save(function(err, updatedObject){
        if(err){
          console.log(err)
        }else{
          console.log("Update Done")
        }
      })
    }
  })
})

router.post("/patchingUser/:id", (req, res) => {
  Bug.findOne({_id: req.params.id}, function(err, foundObject) {
    if(err){
      console.log(err)
    }else{
      foundObject.patchingUser = req.body.patchingUser;
      foundObject.save(function(err, updatedObject){
        if(err){
          console.log(err)
        }else{
          console.log("User Added")
        }
      })

      // console.log(foundObject.patchingUser.split(","))
      // foundObject.patchingUser.split(",").map(value => {
      //     // console.log(value)
      //     if(value != req.body.patchingUsere && value != ""){
      //       foundObject.patchingUser = req.body.patchingUser + "," + foundObject.patchingUser
      //       foundObject.save(function(err, updatedObject){
      //         if(err){
      //           console.log(err)
      //         }else{
      //           console.log("User Added")
      //         }
      //       })
      //     }else{
      //       console.log("User Already Exists")
      //     }
      // })
      // foundObject.patchingUser.push("hi")
      // console.log(foundObject.patchingUser)
      //       foundObject.save(function(err, updatedObject){
      //         if(err){
      //           console.log(err)
      //         }else{
      //           console.log("Update Done")
      //         }
      //       })
      
    }
  })
})


router.delete('/:id/:bugId', (req, res) => {
  Bug.findById(req.params.bugId)
      .then(item => item.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}));
})

module.exports = router;

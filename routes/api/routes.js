const express = require("express");
const router = express.Router();

const Bug = require("../../models/model");

router.get("/", (req, res) => {
    // Bug.find()
    //     .sort({date: -1})
    //     .then(Bugs => res.json(Bugs))
    Bug.find({}, (error, Bug) => {
        if (error) {
            console.log(error);
        } else {
            res.json(Bug)
        }
    });
});

router.post("/", (req, res) =>{
    const newBug = new Bug({
        title: req.body.name,
        description: req.body.description
    });
    newBug.save()
        .then(Bug => res.json(Bug));
});
router.delete("/:id", (req, res) =>{
    Bug.findById(req.params.id)
        .then(Bug => Bug.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;
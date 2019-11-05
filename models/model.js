const mongoose = require("mongoose");

const BugSchema = new mongoose.Schema({
    title: String,
    description: String,
    date:{type: Date, default: Date.now}
});

const Bug = mongoose.model("Bug", BugSchema);

module.exports = Bug;
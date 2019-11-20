const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  coordinator: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  numberOfBugs:{
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);

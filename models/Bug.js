const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BugSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  reporter: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  projectId: {
    type: String,
    required: true
  },
  patchingUser: {
    type: String,
  },
  resolved: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Bug = mongoose.model('bug', BugSchema);

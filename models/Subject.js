// models/Subject.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  name: { type: String, required: true },
  // Add other subject-specific fields here
});

module.exports = mongoose.model('Subject', subjectSchema);

// models/Exam.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examSchema = new Schema({
  subjectId: { type: mongoose.Types.ObjectId, ref: 'Subject', required: true },
  studentId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, required: true },
  // Add other exam-specific fields here
});

module.exports = mongoose.model('Exam', examSchema);

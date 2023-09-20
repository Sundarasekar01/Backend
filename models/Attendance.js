// models/Attendance.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  studentId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  isPresent: { type: Boolean, default: true },
  // Add other attendance-specific fields here
});

module.exports = mongoose.model('Attendance', attendanceSchema);

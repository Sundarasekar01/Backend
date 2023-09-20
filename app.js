// app.js
const express = require('express');
const app = express();
const mongoose = require('mongoose'); // Import Mongoose


// Set EJS as the view engine
app.set('view engine', 'ejs');

// Configure the database connection
mongoose.connect('mongodb://localhost/kibs', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Handle database connection events
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});


// Import route modules
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');

// Use route modules
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/teacher', teacherRoutes);
app.use('/student', studentRoutes);



// Start the server...


app.listen(4000,()=>{
    console.log('server running at 4000')
})



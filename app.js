const express = require('express');
const app = express();
const mongoose = require('mongoose'); // Import Mongoose



app.set('view engine', 'ejs');




app.listen(4000,()=>{
    console.log('server running at 4000')
})



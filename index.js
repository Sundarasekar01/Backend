const express = require("express")
const app = express()


app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.render('main')
})


app.listen(4000,()=>{
    console.log('server running at 4000')
})



const express = require('express')
const mongoose = require('mongoose')
const router = require("./routes/bookRoutes");
const app = express()

// middleware

app.use(express.json());
app.use('/books',router)// localhost:5000/bookd
// app.use( '/', (req,res,next)=>{
//     res.send('this is our starting app ')
// })

mongoose.connect(
    'mongodb+srv://admin:admin123@cluster0.xmf43ey.mongodb.net/bookStore?retryWrites=true&w=majority'
).then(()=>console.log('connection suceed'))
 .then(()=>{
    app.listen(5000);
 }).catch((err)=>console.log(err));
// admin123


// mongodb+srv://admin:<password>@cluster0.xmf43ey.mongodb.net/?retryWrites=true&w=majority
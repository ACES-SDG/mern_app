const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bookRoutes");
const app = express();
const cors = require("cors");

// middleware

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    credentials: true,
  })
);
app.use("/books", router); // localhost:5000/bookd



// app.use(function (req, res, next) {
//     // Website you wish to allow to connect
//     // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//     res.setHeader('Access-Control-Allow-Origin', req.header('http://localhost:3000') );

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', ["GET", "POST", "DELETE", "UPDATE", "PUT"]);

//     // Request headers you wish to allow
//     // res.setHeader('Access-Control-Allow-Headers', 'application/json; charset=utf-8');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

// app.use( '/', (req,res,next)=>{
//     res.send('this is our starting app ')
// })

mongoose
  .connect(
    "mongodb+srv://admin:admin123@cluster0.xmf43ey.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("connection suceed"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
// admin123

// mongodb+srv://admin:<password>@cluster0.xmf43ey.mongodb.net/?retryWrites=true&w=majority

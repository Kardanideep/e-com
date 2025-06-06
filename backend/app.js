const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");  
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path")
  
// error middlware 
const errorMiddleware = require("./middleware/error");

// config 
// if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({path:"backend/config/config.env"})
// }

// use json 
app.use(express.json({ limit: "50mb" }));
// use cookieparser
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended:true, limit: "50mb"  }));
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB
    useTempFiles: true,
  }));

// route import 
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute")

app.use("/api/v1",product); 
app.use("/api/v1",user);
app.use("/api/v1",order);
app.use("/api/v1",payment);
 
app.use(express.static(path.join(__dirname,"../frontend/build")));

app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
}) 
 
// middleware for error
app.use(errorMiddleware);

module.exports = app;
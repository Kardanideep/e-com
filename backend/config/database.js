const mongoose = require("mongoose");

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{console.log("connection done")}).catch((err)=>{console.log(err)})
}

module.exports = connectDatabase; 
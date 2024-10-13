const mongoose=require("mongoose")
require("dotenv").config();

const Dbconfig=()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("connected to database");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports=Dbconfig;

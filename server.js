

const express =require("express");
const Dbconfig = require("./Config/Dbconfig");

const app=express();
require("dotenv").config();



app.use(express.json())





const TodoRoutes=require("./Router/Routes")




app.use("/api/v1",TodoRoutes)

app.get("/",(req,res)=>{
    res.send("Welcome to Todo List API")
})

app.listen(process.env.PORT,()=>{
    console.log("server is running on port 300");
})
require("./Config/Dbconfig")
Dbconfig();

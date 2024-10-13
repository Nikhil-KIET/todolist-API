
const mongoose =require("mongoose");

const todoSchema= new mongoose.Schema(
    {
       title:{
        type:String,
        required:true

       },
       desc:{
        type:String,
        required:true
       },

       createdDate:{
        type:Date,
        default:Date.now
        

       },
       updatedDate:{
        type:Date,
        default:Date.now
       }

    }
)

module.exports=mongoose.model("todo",todoSchema)
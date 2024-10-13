
const express =require("express")
const router=express.Router();

const todo=require("../Model/Todo.js")

async function createTodo (req,res){
    try {

        const {title,desc}=req.body;
        
       const data= await todo.create({title,desc})

       res.status(200).json({
        message:"Todo created successfully",
        sucess:true,
        data:data, 

       })




    }catch {
        res.status(500).send("hi")
    }
    

}


 async function deleteTodo(req,res){
    try {
        const {id}=req.body;
        const data=await todo.findByIdAndDelete(id)
        res.status(200).json({
            message:"Todo deleted successfully",
        })
    }catch{
        res.status(500).send("hi")
    }
 }

 async function updateTodo (req,res){
    try {
        const {id,descr}=req.body;
        const data=await todo.findByIdAndUpdate(id,{desc:descr})
        res.status(200).json({
            message:"Todo updaated successfully",
        })
    }catch{
        res.status(500).send("hi")
    }

 }


 module.exports={deleteTodo,createTodo,updateTodo}


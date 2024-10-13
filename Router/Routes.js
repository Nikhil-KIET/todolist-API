
const express =require("express")
const router=express.Router();
const {createTodo,deleteTodo,updateTodo}=require("../Controller/Control")

router.post("/createTodo",createTodo)
router.delete("/deleteTodo",deleteTodo)
router.put("/updateTodo",updateTodo)

module.exports=router 




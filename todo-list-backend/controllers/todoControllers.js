const mongoose=require('mongoose')
const schema=require('../schema')

const getTodo= async(req,res)=>{
    try{
        const allvals=await schema.find({}).sort({createdAt:-1});
        res.status(200).send(allvals);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const createTodo= async(req,res)=>{
    const db=req.body;
    
    try{
        const allvals=await schema.find({}).sort({createdAt:-1});
        res.status(200).send(allvals);
    }catch(error){
        res.status(400).send(error.message);
    }
}


module.exports={
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
}

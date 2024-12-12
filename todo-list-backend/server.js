const express=require('express')
const mongoose=require('mongoose')
const Cors=require('cors')
const dotenv=require('dotenv')

dotenv.config()

const{
    getTodo,createTodo,updateTodo,deleteTodo
}=require('./controllers/todoControllers');

const app=express();
const port=process.env.PORT||8000;
const connectionURL=process.env.MONGO_URI

app.use(express.json());
app.use(Cors());

mongoose.connect(connectionURL)
.then(()=>{
    app.listen(port,()=>console.log(`Running on port: ${port}`));
})
.catch((err)=>{
    console.log(err);
})

// CRUD Operations
app.get('/todos',getTodo)
app.post('/todos',createTodo)
app.put('/todos/:id',updateTodo)
app.delete('/todos/:id',deleteTodo)
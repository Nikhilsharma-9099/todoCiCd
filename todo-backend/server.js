const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
const Todo = require('./models/todoModel');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://Root:Root123@tododb.rkf9pbs.mongodb.net/?retryWrites=true&w=majority&appName=ToDoDB")
        console.log("MongoDB connected");

    } catch (error) {
        console.error("MongoDB connection failed", error);
    }

}

 app.get('/get-todo', async(req, res) => {
    console.log("Getting all todos from DB");

    try{
        const todos = await Todo.find({});
        console.log("Fetched all todos from DB");
        res.status(200).json(todos);

    } catch(error){
        console.log("Error occurred while getting todos from DB", error);
        res.status(500),json({message: "Something went wrong, try again later!!"});
    }
    
 })

app.post('/add-todo', async(req, res)=>{

    const { todo } = req.body;
    console.log("Adding a new Todo", todo);
    const newTodo = new Todo({
        todo: todo
    });


    console.log("Adding the todo to DB", newTodo);
    const savedTodo = await newTodo.save();
    console.log("Added the new todo to DB", savedTodo);

    res.status(200).json(savedTodo);
});


connectDB();
const PORT = 3001;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})
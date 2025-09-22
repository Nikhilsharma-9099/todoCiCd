const Todo = require('../models/todoModel');


exports.getTodos = async(req, res) => {
    console.log("Getting all todos from DB");

    try{
        const todos = await Todo.find({});
        console.log("Fetched all todos from DB");
        res.status(200).json(todos);

    } catch(error){
        console.log("Error occurred while getting todos from DB", error);
        res.status(500),json({message: "Something went wrong, try again later!!"});
    }
    
 };

exports.addTodo = async(req, res)=>{

    const { todo } = req.body;
    console.log("Adding a new Todo", todo);
    const newTodo = new Todo({
        todo: todo
    });


    console.log("Adding the todo to DB", newTodo);
    const savedTodo = await newTodo.save();
    console.log("Added the new todo to DB", savedTodo);

    res.status(200).json(savedTodo);
};
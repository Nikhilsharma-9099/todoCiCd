const Todo = require('../models/todoModel');
const logger = require('../utils/logger');

exports.getTodos = async(req, res) => {
    console.log("Getting all todos from DB");

    try{
        const todos = await Todo.find({});
        logger.info("Fetched all todos ${JSON.stringify(todos)}");
        res.status(200).json(todos);

    } catch(error){
        logger.error("Error occurred while getting todos from DB", error);
        res.status(500),json({message: "Something went wrong, try again later!!"});
    }
    
 };

exports.addTodo = async(req, res)=>{

    const { todo } = req.body;
    logger.info("Adding a new Todo", todo);
    const newTodo = new Todo({
        todo: todo
    });


    logger.info("Adding the todo to DB", newTodo);
    const savedTodo = await newTodo.save();
    logger.info("Added the new todo to DB", savedTodo);

    res.status(200).json(savedTodo);
};
import React, {useState} from 'react';

const AddTodo = ()=> {

    const [todo, setTodo] = useState('This is a new state')
    
    const handleSubmit = async (e) => {
        e.preventDefault();  
        if (!todo) {
            console.log("Please enter a todo");
            return;
        }
        console.log(todo);
        try {
            const response = await fetch('http://localhost:3001/add-todo', {
                method: "POST",
                headers: {
                    "Content-type": 'application/json'
                },
                body: JSON.stringify({todo})
            })

            console.log("Response received", response);

        }catch(err) {
            console.log("Error occurred while adding Todo", err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)}/>
            <button type="submit">Submit</button>
            
        </form>
    )

}

export default AddTodo
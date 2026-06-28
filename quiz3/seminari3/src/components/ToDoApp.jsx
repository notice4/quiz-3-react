import React, { useState } from 'react'

export default function ToDoApp() {
    const [todos, setTodos] = useState([]);
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userInput.trim() === "") {
            return;
        }

        const newToDo = {
            id: Math.random(),
            title: userInput
        }

        setTodos(prev => [...prev, newToDo]);
        setUserInput("")

    }

    const handleDelete = (id) => {
        const filterToDo = todos.filter((item) => item.id !== id)
        setTodos(filterToDo)
    }
    
  return (
    <div>
        <h2>To Do App</h2>
        <form onSubmit={handleSubmit} action="">
            <input 
            type="text" 
            placeholder='to do'
            onChange={(e) => {
                setUserInput(e.target.value)

            }}
            value={userInput}
            />
            <button>Add Item</button>
        </form>

        {todos.length === 0 ? (<h3>Not Found</h3>) : (
                    <ul>
                        {todos.map((el) => (<div key={el.id}><li>{el.title}</li>
                                <button onClick={() => handleDelete(el.id)}>Delete Item</button></div>
                        ))}
                    </ul>
                )
            }
    </div>
  )
}
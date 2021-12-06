import React, { useState } from 'react'
import TodoList from './TodoList'

const Todo = () => {
    console.log("todos");
    const [todos , setTodos] = useState([]);
    const [todo , setTodo] = useState('');

    const  addTodo = () => {
        setTodos([...todos,todo])
        //todos.push(todo);
        setTodo('');
    }
    const deleteTodo = (todo) => {
        todos.splice(todos.indexOf(todo) , 1)
        setTodos([...todos])
    }

    return (
        <div>
            <input type="text" name="todoInput" value={todo}  className="m-4 text" onChange={(e) => setTodo(e.target.value)} />
            <button className="btn btn-primary" onClick={addTodo} >Add Notes</button>
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    )
}

export default Todo


import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';

const TodoList = ({todo}) => {
    console.log(todo);
    // const [todos , setTodos] = useState();

    // useEffect(async () => {
    //     const res = await fetch(`http://localhost:1338/todo-lists/${selectedList}`);
    //     const data = await res.json();
    //     setTodos(data.Todo);
    // }, [])

    return (
        <div>
            {todo &&
               todo.Todo.map(td => 
               <div key={td.id} className="d-flex border bg-light mt-2">
                   <div className="px-2 w-50 align-self-center">{td.TodoText}</div> 
                   {/* <button className="btn btn-danger px-4" onClick={() =>  {deleteTodo(todo)}}>Delete</button> */}
                   <div className="align-self-center px-2">last Updated On: </div>
                </div>)
            }
            
        </div>
    )
}

export default TodoList

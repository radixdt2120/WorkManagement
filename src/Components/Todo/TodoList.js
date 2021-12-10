import React, { useState } from 'react'

const TodoList = ({todo , handleDelete}) => {
    console.log(handleDelete);
    return (
        <div className="bg-todo border mt-5">
            <h1 className="p-2">{todo ? todo.Title : ''}</h1>
            {todo &&
               todo.Todo.map(td => 
               <div key={td.id} className="d-flex border-top mt-2 p-2">
                   <div className="px-2 w-50 align-self-center">{td.TodoText}</div> 
                   <button className="btn btn-danger px-4" onClick={handleDelete(td.id)}>Delete</button>
                   <div className="align-self-center px-2">last Updated On: </div>
                </div>)
            }
            
        </div>
    )
}

export default TodoList

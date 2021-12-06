import React from 'react'

const TodoList = ({todos , deleteTodo}) => {

    
    return (
        <div>
            {
               todos.map(todo => 
               <div key={todo} className="d-flex border bg-light mt-2">
                   <div className="px-2 w-50 align-self-center">{todo}</div> 
                   <button className="btn btn-danger px-4" onClick={() =>  {deleteTodo(todo)}}>Delete</button>
                   <div className="align-self-center px-2">last Updated On: </div>
                </div>)
            }
            
        </div>
    )
}

export default TodoList

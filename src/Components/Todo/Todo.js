import React, { useEffect, useState } from 'react'
import todoServices from '../../services/TodoServices';
import TodoList from './TodoList';

const Todo = () => {
    const [allTodoLists, setAllTodoList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [showList, setShowList] = useState(true);
    const [listCreateSuccess, setListCreateSuccess] = useState(false);
    const [todoList, setTodoList] = useState({
        Title: '',
        todos: []
    });
    const [singleTodo , setSingleTodo] = useState('');
    const [selectedList , setSelectedList] = useState();

    const addList = async () => {
        setTodoList({
            ...todoList,
            todos : [...todoList.todos,{"TodoText" : singleTodo}]
        })
        const todoItem =  {Title : todoList.Title , Todo : [...selectedList.Todo , {"TodoText" : singleTodo}]}
        // delete todoItem.todos
        const res = await todoServices.updateTodoList(selectedList.id ,todoItem)
        console.log("res : ", res);
        setSelectedList(res)

    }
    const handleChange = (e) => {
        setShowList(true)
        setTodoList({
            ...todoList,
            [e.target.name]: e.target.value,
        });
        var filteredData = allTodoLists.filter(i => {
            if (e.target.value.length >= 3) {
                return i.Title.toLowerCase().includes(e.target.value)
            }
        })
        const newfilter = filteredData.sort((a, b) => {
            if (a.Title < b.Title) {
                return -1;
            }
            if (a.Title > b.Title) {
                return 1;
            }
            return 0;
        })
        setFilteredList(newfilter)
    }

    useEffect(() => {
        const getAllTodoLists = async () => {
            const res = await fetch("http://localhost:1338/todo-lists");
            const data = await res.json();
            setAllTodoList(data)
        }
        getAllTodoLists()
    }, [listCreateSuccess])

    const createNewList = async (title) => {
        const res = await todoServices.addTodoList({ Title: title })
        if (res.id) {
            setListCreateSuccess(!listCreateSuccess)
            setSelectedList(res)
        }
    }

    console.log(selectedList);
    return (
        <div>
            <div className="border" style={{ cursor: "pointer" }} >
                <input type="" name="Title" value={todoList.Title} className="m-4"
                    onChange={(e) => handleChange(e)} placeholder="Select Or Create TODOLIST" />
                {
                    todoList.Title.length > 0 && showList &&
                    <div>
                        <ul>
                            {
                                filteredList.map(i => <li className="p-2 bg-secondary" key={i.id} onClick={() => { setShowList(!showList); todoList.Title = i.Title ; setSelectedList(i) }}>{i.Title}</li>)
                            }

                            {
                                todoList.Title.length >= 2 &&
                                <li onClick={() => { setShowList(!showList); createNewList(todoList.Title) }}>Create "{todoList.Title}" </li>
                            }
                        </ul>
                    </div>
                }

            </div>
            <input type="text" name="Title" className="m-4" onChange={(e) => setSingleTodo(e.target.value)} />
            <button className="btn btn-primary" onClick={addList} >Add Todo</button>
            <TodoList todo={selectedList}/>
        </div>
    )
}

export default Todo


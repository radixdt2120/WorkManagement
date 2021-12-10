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
        Todo: []
    });
    const [singleTodo , setSingleTodo] = useState('');
    const [selectedList , setSelectedList] = useState();

    const addList = async () => {
        if(singleTodo.trim().length >=3){
            setTodoList({
                ...todoList,
                Todo : [...todoList.Todo,{"TodoText" : singleTodo}]
            })
            const todoItem =  {Title : todoList.Title , Todo : [...selectedList.Todo , {"TodoText" : singleTodo}]}
            const res = await todoServices.updateTodoList(selectedList.id ,todoItem)
            setSelectedList(res);
            setSingleTodo('')
        }
        else{
            alert("Please enter more then Three Latter");
        }
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
    const handleDelete = (id) => {
        console.log("id");

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
        if(title.trim().length >=3 ){
            const res = await todoServices.addTodoList({ Title: title })
            if (res.id) {
                setListCreateSuccess(!listCreateSuccess)
                setSelectedList(res)
            }
        }
        else{
            alert("Please enter more then Three Latter");
        }
    }
    // console.log(selectedList);
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

                <input type="text" name="Title" className="m-4" value={singleTodo} onChange={(e) => setSingleTodo(e.target.value)} placeholder="Add Todo Items" />
                <button className="btn btn-primary" onClick={addList} >Add Item</button>
            </div>
            <TodoList todo={selectedList} handleDelete={handleDelete}/>
        </div>
    )
}

export default Todo


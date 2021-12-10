import React, { useContext, useEffect, useState } from 'react'

import {MyContext} from "../context/context"
const Profile = () => {
    const value = useContext(MyContext)
    const [title, setTitle] = useState("")
    const [isMatch, setIsMatch] = useState(false)
    const [filterTodo, setFilterTodo] = useState([])
    const [todoList, setTodoList] = useState([
        {
            id : "1",
            title : "abc"
        },
        {
            id : "2",
            title : "vadhiya"
        },
        {
            id : "3",
            title : "smit"
        }
    ])
    useEffect(() => {
        console.log(todoList.sort((a,b) => {
            if( a.title < b.title ){
                return -1;
              }
              if ( a.title > b.title ){
                return 1;
              }
              return 0;
        }));
    }, [])

    const handleChange= (e) =>{
        setTitle(e.target.value)   
        setFilterTodo(todoList.filter(item => item.title.toLowerCase().includes(e.target.value)))
        if(todoList.find(item => item.title.toLowerCase() === e.target.value))
            setIsMatch(true)
        else 
            setIsMatch(false)
            const d = document.getElementById("title")
            console.log(d.classList);
            
    }

    const clicked  = () =>{
        console.log("clicked");
    }

    const create  = () =>{
        console.log("create");
    }

    return (
        <div className="border">
            <form action="" onBlur={() => setTitle("")}>
            <input type="text" value={title} id="title" name="title" onChange={handleChange} />
            {title.length > 0 && <ul>
                {filterTodo.map(item => <li onClick={clicked} className="cursor-pointer" key={item.id}>{item.title}</li>)}
                {!isMatch && <li className="cursor-pointer" onClick={create}>create ... {title}</li>}
            </ul>}

                <input type="text" />
            <select name="" id="">
                <option value="">
                    
                </option>
                <option value="">asdf</option>
            </select>
            </form>
            
        </div>
    )
}

export default Profile

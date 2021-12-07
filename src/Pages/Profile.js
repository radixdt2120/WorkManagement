import React, { useState } from 'react'

const Profile = () => {
    const [title, setTitle] = useState("")


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

    const handleChange= (e) =>{
        setTitle(e.target.value)
    }


    return (
        <div>
            profile
            <input type="text" value="title" name="title" onChange={handleChange} />
            <ul>

            </ul>
        </div>
    )
}

export default Profile

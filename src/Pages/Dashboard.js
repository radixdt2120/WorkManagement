import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Dashboard = () => {

    const [data, setData] = useState([])

    const handleClick =(id) => {
        const item = data.find(item => item.id = id)
        console.log(item);
        const url = `http://52.66.238.175:1337/careers/${id}`
    }

    useEffect(() => {
        async function getdata(){
            //const res = await axios.get("http://52.66.238.175:1337/pages?[URL_contains]=/current-openings")
            const res = await axios.get("http://52.66.238.175:1337/careers")
            const data = await res.data 
            setData([...data])
        }
        getdata()
    }, [])
    return (
        <div>
            <ul>
                {data.map(item =>     <li key={item.id}>
                        {item.JobTitle}
                        <button onClick={() => handleClick(item.id)}>
                            {item.JobTitle}
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Dashboard

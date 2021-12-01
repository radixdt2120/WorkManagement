import React from 'react'

const Clock = ({title , bg ,time}) => {
    return (
        <div className={`card h1 text-white align-self-center w-100 bg-${bg}`} style={{maxWidth : "18rem"}}>
            <div className=" card-header p-0 ">
                {title}
            </div>
            <div className="card-body p-1 ">
                {time ? `${time.split(":")[0]} : ${time.split(":")[1]}` : "00 : 00"}
            </div>
        </div>
    )
}

export default Clock

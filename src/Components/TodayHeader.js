import React, { useEffect, useState } from 'react'
import { getTodayDate } from '../utils/Utility'

const TodayHeader = () => {
    const [timer, setTimer] = useState("00:00:00");

    useEffect(() => {
        setInterval(() => {
            setTimer(new Date().toString().split(" ")[4])
        },1000)
    }, [])

    return (
        <div className="bg-white h4 m-0" >
            <div className=" d-flex flex-wrap justify-content-between  p-1 px-4">
                <div>
                    {/* Date : {new Date().getDate()+ "/"+(new Date().getMonth()+1)+ "/"+new Date().getFullYear()} */}
                    <i class="fas fa-calendar-week"></i> {getTodayDate()}
                </div>
                
                <div className="">
                <i class="fas fa-clock"></i> {timer}
                </div>
            </div>
        </div>
    )
}

export default TodayHeader

import React, { useEffect, useState } from 'react'
import { getTodayDate } from '../../utils/Utility';

const Clock = () => {
    const [timer, setTimer] = useState("00:00:00");

    useEffect(() => {
        setInterval(() => {
            setTimer(new Date().toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
        },1000)
    }, [])

    return (
        <div className="fixed-watch bg-info ">
            <span>

                <i className="fas fa-calendar-week"></i> {getTodayDate()}
            </span>
                <br/>
            <span>

                <i className="fas fa-clock"></i> {timer}
            </span>

        </div>
    )
}

export default Clock

import React, { useEffect, useState } from 'react'
import addTime from '../utils/TimeAddition'
import subtractTime from '../utils/TimeSubtract'
import Clock from './Clock'

const TimingDisplay = ({totalTime, setTotalTime}) => {


    //const [totalTime, setTotalTime] = useState({})

    const [inTime, setInTime] = useState("00:00")
    const [totalIn, setTotalIn] = useState("00:00")
    const [totalOut, setTotalOut] = useState("00:00")
    const [inInterval, setInInterval] = useState("")
    const [outInterval, setOutInterval] = useState("")

    useEffect(() => {
        if(Object.keys(totalTime).length !== 0){
            totalInFunction(totalTime.Timings)
        }
    },[totalTime]);

    const totalInFunction = (data) => {
        var TempInTime = "00:00"

        if( data.length > 0 ){

            const firstInTime = data[0].InTime.slice(0,5)
            setInTime(firstInTime)
            data.forEach(item => {
                const startTime = item.InTime
                const endTime = item.OutTime

                if(endTime !== null && endTime !== ""){
                    TempInTime = addTime(TempInTime,subtractTime(startTime, endTime))
                }
            });
            // const temp = data.map(item => {
            // })
            const lastNode = data[data.length-1]

            clearInterval(inInterval)
            clearInterval(outInterval)

            if(lastNode.OutTime !== null && lastNode.OutTime !== ""){
                setTotalIn(val => TempInTime)
                setTotalOut(val => subtractTime(TempInTime,subtractTime(firstInTime,new Date().toString().split(" ")[4])))
                setOutInterval(setInterval(() => setTotalOut(val => subtractTime(TempInTime,subtractTime(firstInTime,new Date().toString().split(" ")[4]))),1000))
            } else {
                const lastIn = lastNode.InTime.slice(0,5)
                setTotalIn(val => addTime(TempInTime,subtractTime(lastIn,new Date().toString().split(" ")[4])))
                setInInterval(setInterval(() => setTotalIn(val => addTime(TempInTime,subtractTime(lastIn,new Date().toString().split(" ")[4]))),1000))
                setTotalOut(val => subtractTime(TempInTime,subtractTime(firstInTime,lastIn)))
            }
        } else {
            clearInterval(inInterval)
            clearInterval(outInterval)
            setInTime("00:00")
            setTotalIn("00:00")
            setTotalOut("00:00")
        }
    }

    return (
        <div className="text-center flex-wrap d-flex gap-2   justify-content-center" >
            <Clock bg="primary" title="First In" time={inTime} />

            <Clock bg="success" title="Total In" time={totalIn} />

            <Clock bg="danger" title="Total Out" time={totalOut} />
            
        </div>
    )
}

export default TimingDisplay

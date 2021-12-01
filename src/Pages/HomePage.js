import React, { useEffect, useState } from 'react'
import Clock from '../Components/Clock'
import subtractTime from '../utils/TimeSubtract'
import addTime from '../utils/TimeAddition'
import TimingDisplay from '../Components/TimingDisplay'
import TodayHeader from '../Components/TodayHeader'
import AddInOut from '../Components/AddInOut'
import TodayTiming from '../Components/TodayTiming'
import axios from 'axios'
import StratClock from '../utils/TimeClock'
import service from '../services/service'
import { getTodayDate } from '../utils/Utility'

const HomePage = () => {
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const [timer, setTimer] = useState("00:00:00");
    
    const [totalTime, setTotalTime] = useState({})

    const [inTime, setInTime] = useState("00:00")
    const [totalIn, setTotalIn] = useState("00:00")
    const [totalOut, setTotalOut] = useState("00:00")
    const [inInterval, setInInterval] = useState("")
    const [outInterval, setOutInterval] = useState("")

    const nowTime = () => {
        setTimer(new Date().toString().split(" ")[4])
    }

    useEffect(async () => {
        //Today's time (Watch)
        setInterval(() => {
            setTimer(new Date().toString().split(" ")[4])
        },1000)

        const getData = async () => {
            const Timings = await service.getTodayData(1,getTodayDate())

            if(Timings.length > 0){
                setTotalTime({...Timings[0]})
            } 
        }
        getData()
    },[]);
    
    useEffect(() => {
        if(Object.keys(totalTime).length !== 0){
            totalInFunction(totalTime.Timings)
        }
    }, [totalTime]);

  

    

    const totalInFunction = (data) => {
        var TempInTime = "00:00"
        
        if( data.length > 0 ){
            
            const firstInTime = data[0].InTime.slice(0,5)
            setInTime(firstInTime)
            
            data.map(item => {
                const startTime = item.InTime
                const endTime = item.OutTime

                if(endTime !== null && !endTime.includes("0:00:00")){
                    TempInTime = addTime(TempInTime,subtractTime(startTime, endTime))
                }
            })
            const lastNode = data[data.length-1]
            
            clearInterval(inInterval)
            clearInterval(outInterval)

            if(lastNode.OutTime !== null && !lastNode.OutTime.includes("0:00:00")){
                setTotalIn(val => TempInTime)
                setOutInterval(setInterval(() => setTotalOut(val => subtractTime(TempInTime,subtractTime(firstInTime,new Date().toString().split(" ")[4]))),1000))
                
            } else {
                const lastIn = lastNode.InTime.slice(0,5)
                setInInterval(setInterval(() => setTotalIn(val => addTime(TempInTime,subtractTime(lastIn,new Date().toString().split(" ")[4]))),1000))
                setTotalOut(val => subtractTime(TempInTime,subtractTime(firstInTime,lastIn)))
            }
        }
    }


    return (
        <section className="">  
            <TodayHeader timer={timer} />
           
            <TimingDisplay inTime ={inTime} totalIn ={totalIn} totalOut={totalOut} />
           <section className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <AddInOut data={totalTime} setData={setTotalTime} />
                    </div>
                    <div className="col-12 col-md-8">
                        <TodayTiming data={totalTime} />
                    </div>
                </div>
           </section>
        {totalTime.length > 0 && <> 
        
            
        </>}
        </section>
    )
}

export default HomePage

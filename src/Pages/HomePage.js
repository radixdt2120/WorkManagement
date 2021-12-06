import React, { useEffect, useState } from 'react'
import TimingDisplay from '../Components/TimingDisplay'
import AddInOut from '../Components/AddInOut'
import TodayTiming from '../Components/TodayTiming'
import service from '../services/service'
import { getTodayDate } from '../utils/Utility'
import Todo from '../Components/Todo/Todo'


const HomePage = () => {
    console.log("hello ji");
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const [totalTime, setTotalTime] = useState({})

    useEffect(async () => {
        const getData = async () => {
            const Timings = await service.getTodayData(1,getTodayDate())
            if(Timings.length > 0){
                setTotalTime({...Timings[0]})
            } 
        }
        getData()
    },[]);
   


    return (
        <section className="">  
            <TimingDisplay totalTime={totalTime} />
           <section className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <AddInOut data={totalTime} setData={setTotalTime} />
                    </div>
                    <div className="col-12 col-md-8">
                        <TodayTiming data={totalTime} />
                    </div>
                    {/* todos */}

                    <div className="col-12 col-md-4 mt-lg-5">
                        {/* <AddInOut data={totalTime} setData={setTotalTime} /> */}
                    </div>

                    <div className="col-12 col-md-8 mt-lg-5">
                        <Todo />
                    </div>
                </div>
           </section>
        
        </section>
    )
}

export default HomePage

import React, { useContext, useEffect, useState } from 'react'
import TimingDisplay from '../Components/TimingDisplay'
import AddInOut from '../Components/AddInOut'
import TodayTiming from '../Components/TodayTiming'
import service from '../services/service'
import { getTodayDate } from '../utils/Utility'
import Todo from '../Components/Todo/Todo'

import {MyContext} from "../context/context"

const Home = () => {

    const {user} = useContext(MyContext)
    
    const [totalTime, setTotalTime] = useState({})

    useEffect(() => {
        const getData = async () => {
            const Timings = await service.getTodayData(user.id,getTodayDate())
            if(Timings.length > 0){
                setTotalTime({...Timings[0]})
            } 
        }
        getData()
    },[user]);

    return (
        <div className="">
            <section className="py-2 bg-white container-fluid">
                <TimingDisplay totalTime={totalTime} />
            </section>

            <section className="py-3 bg-light container-fluid">
                <div className="row ">
                    <div className="col-12 col-md-4">
                        <AddInOut totalTime={totalTime} setData={setTotalTime} />
                    </div>
                    <div className="col-12 col-md-8">
                        <TodayTiming totalTime={totalTime} setTotalTime={setTotalTime} />
                    </div>
                </div>
            </section>

           <section className="container-fluid">
                <div className="row">
                    {/* todos */}

                    <div className="col-12 col-md-4 mt-lg-5">
                        {/* <AddInOut data={totalTime} setData={setTotalTime} /> */}
                    </div>

                    <div className="col-12 col-md-8 mt-lg-5">
                        <Todo />
                    </div>
                </div>
           </section>
        
        </div>
    )
}

export default Home

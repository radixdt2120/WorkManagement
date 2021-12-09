import React, { useEffect, useState } from 'react'
import TodayTiming from '../Components/TodayTiming'
import services from '../services/service'

const Dashboard = () => {

    const [data, setData] = useState([])
    const [showId, setShowId] = useState("")
    useEffect(() => {
        async function getData() {
            const res = await services.getDataById(1)
            console.log(res);
            setData(res)
        }
        getData()
    }, [])

    const setMyId = (id) => {
        if(showId === id){
            setShowId("")
        } else {
            setShowId(id)
        }
    }

    return (
        <div className="container">
          
            <div className="accordion accordion-flush border fs-6 fw-bold rounded rounded-4 " id="accordionFlushExample">
                <div className="row collapsed h-100 py-2  bg-dark text-white m-0">
                    <div className="col">Date</div>
                    <div className="col">Day</div>
                    <div className="col">First In </div>
                    <div className="col">Last Out</div>
                    <div className="col-1"></div>
                </div>
                {data.length > 0 && data.map((item,index) => <div className=" accordion-item " key={item.id}>
                    <div className={`accordion-header p-2  ${index%2 !== 0 ?"bg-teal" : "bg-gray"}`} id={`we${item.id}`}>
                            <div className={`row w-100 collapsed h-100 `} >
                                <div className="col">{item.Date}</div>
                                <div className="col">{item.Day}</div>
                                <div className="col">{item.Timings[0].InTime && item.Timings[0].InTime.slice(0,5)}</div>
                                <div className="col">{item.Timings[item.Timings.length-1].OutTime && item.Timings[item.Timings.length-1].OutTime.slice(0,5)}</div>
                                <div className="col-1" >
                                    <button className="btn" data-bs-toggle="collapse" data-bs-target={`#id${item.id}`} aria-expanded="false" aria-controls={`id${item.id}`}><i className="fa fa-caret-down"></i></button>
                                </div>
                            </div>
                    </div>
                    <div id={`id${item.id}`} className="accordion-collapse collapse " aria-labelledby={`we${item.id}`} data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <TodayTiming totalTime={item} setTotalTime={setData} />
                        </div>
                    </div>
                </div>)}
            </div>

            {/* <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Day</th>
                        <th>First In</th>
                        <th>Last Out</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        {data.length > 0 && data.map(item => <React.Fragment key={item.id}>
                            <tr className={`${showId == item.id ? "d-none": ""}  `}>
                                <td>{item.Date}</td>
                                <td>{item.Day}</td>
                                <td>{item.Timings[0].InTime && item.Timings[0].InTime.slice(0,5)}</td>
                                <td>{item.Timings[item.Timings.length-1].OutTime && item.Timings[item.Timings.length-1].OutTime.slice(0,5)}</td>
                                <td><button className="btn btn-success" onClick={() => setMyId(item.id)}>Details</button></td>
                            </tr>
                            
                            <tr className={`${showId == item.id ? "": "d-none"}  `}>
                                <button className="btn btn-success" onClick={() => setMyId(item.id)}>Details</button>                    
                                <TodayTiming totalTime={item} setTotalTime={setData} />
                            </tr>

                        </React.Fragment>
                        )}

                </tbody>
            </table> */}

            </div>

    )
}

export default Dashboard

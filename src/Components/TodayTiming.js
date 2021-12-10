import React, { useState } from 'react'
import services from '../services/service'
import closeModal from '../utils/CloseModal'
const initialState = {
    InTime : "",
    WorkDescription : "",  
    OutTime : "",
    BreakDescription : "",
}

const TodayTiming = ({totalTime,setTotalTime}) => {

    const [formData, setFormData] = useState({...initialState})

    const handleEditClick = (id) => {
        const timeData = {...totalTime.Timings.find(item => item.id === id)}
        setFormData({...timeData})
    }

    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData({...formData , [name] : value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {...totalTime}
       
        var newTimings = data.Timings.map(item => {
            if(item.id === formData.id)
                return formData
            return item
        })
       var res =  await services.updateTodayData(totalTime.id,{...data,Timings : newTimings})
       if(res){
            setTotalTime(res)
            closeModal("closeUpdate")
            res = undefined
        }
        

        
    }
    
    const handleDeleteClick = async (id) => {
        if(window.confirm("delete entry?")){
            var newTimings = totalTime.Timings.filter(item => item.id != id)
            var res =  await services.updateTodayData(totalTime.id,{...totalTime, Timings : [...newTimings]})
            if(res){
                setTotalTime(res)
            }
        }
    }

    return (
        <div>
            <table className="table table-bordered table-hover table-striped table-sm">
                <thead className="">
                    <tr>
                        <th>In Time</th>
                        <th>Out Time</th>
                        <th>Work Description</th>
                        <th>Break Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {totalTime.Timings && totalTime.Timings.map(item => (
                        <tr key={item.id}>
                            <td>{item.InTime && item.InTime.slice(0,5)}</td>
                            <td>{item.OutTime && item.OutTime.slice(0,5)}</td>
                            <td>{item.WorkDescription}</td>
                            <td>{item.BreakDescription}</td>
                            <td className="cursor-pointer d-flex justify-content-around"   data-bs-toggle="modal" data-bs-target="#editTime">
                                <span className="mx-1">
                                    <i className="fa fa-edit" onClick={() => handleEditClick(item.id)}></i>
                                </span>
                                <span className="mx-1">
                                    <i className="fa fa-trash" onClick={() => handleDeleteClick(item.id)}></i>
                                </span>
                            </td>
                        </tr>
                    ))}
                   
                </tbody>
            </table>
                
            <div className="modal fade" tabIndex="-1" id="editTime" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" >
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="modal-header  bg-success text-white">
                                <h5 className="modal-title">EDIT TIMINGS</h5>
                                <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body bg-light">
                                    <div className="d-flex justify-content-evenly gap-3 align-items-center my-2">
                                        <label htmlFor="inTime" className="h5">InTime</label>
                                        <input type="time"  className="form-control d-inline-block" id="inTime" name="InTime" value={formData.InTime} onChange={handleChange} step="2"/>
                                    </div>
                                    <div className="d-flex justify-content-evenly gap-3 align-items-center my-2">
                                        <label htmlFor="outTime" className="h5">OutTime</label>
                                        <input type="time"  className="form-control d-inline-block" id="outTime" name="OutTime" value={formData.OutTime} onChange={handleChange} step="2"/>
                                    </div>

                                    <div className="my-2">
                                        <label htmlFor="workDesc" className="h5">Work description</label> <br />
                                        <textarea type="text"  className="form-control" rows="3" id="workDesc" placeholder="Work you have/will do in this time ... " name="WorkDescription" value={formData.WorkDescription} onChange={handleChange} />
                                    </div>
                                    <div className="my-2">
                                        <label htmlFor="breakDesc" className="h5">Break description</label> <br />
                                        <textarea type="text" className="form-control" rows="3" id="breakDesc" placeholder="Reason of break ... " name="BreakDescription" value={formData.BreakDescription} onChange={handleChange} />
                                    </div>
                            </div>
                            <div className="modal-footer ">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="closeUpdate">Close</button>
                                <button type="submit" className="btn btn-success"  >Update Data</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TodayTiming

import React, { useState } from 'react'
import services from '../services/service'
import closeModal from '../utils/CloseModal'
import { validateTime } from '../utils/Utility'
const initialState = {
    InTime : "",
    WorkDescription : "",  
    OutTime : "",
    BreakDescription : "",
}
const TodayTiming = ({totalTime,setTotalTime}) => {

    const [formData, setFormData] = useState({...initialState})

    const handleEditClick = (id) => {
        console.log(totalTime);
        console.log(id);
        const timings = [...totalTime.Timings]
        const timeData = {...timings.find(item => item.id === id)}
        setFormData({...timeData})

    }
    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData({...formData , [name] : value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData);
        
        const data = {...totalTime}
        var isOutTimeNull = false
        var lastnode = data.Timings[data.Timings.length-1]
        if(!(lastnode.OutTime === null) && !(lastnode.OutTime === "")){
            isOutTimeNull = false
        } else {
            isOutTimeNull = true
        }

        var isValid = false
        if(!isOutTimeNull){
            if(data.Timings.length > 0){
                isValid = validateTime(data.Timings[data.Timings.length-1].OutTime,formData.InTime)
            } else {
                isValid = true
            }
        } else {
            isValid = validateTime(formData.InTime,formData.OutTime)
        }
        if(isValid){
            var temp = data.Timings.map(item => {
                if(item.id === formData.id)
                {
                    return formData
                }
                return item
            })
           var res =  await services.updateTodayData(totalTime.id,{...data,Timings : temp})
           if(res){
                setTotalTime(res)
                // const myModal = document.getElementById("closeUpdate")
                // myModal.setAttribute('data-bs-dismiss', 'modal');
                // myModal.click()
                closeModal("closeUpdate")
                res = undefined
            }
        } else {
            alert("wrong entry")
        }

        
    }
    const handleDeleteClick = async (id) => {
        if(window.confirm("delete entry?")){
            console.log(id);
            const timings = [...totalTime.Timings]
            timings.splice(timings.indexOf(timings.find(item => item.id === id)),1)
            console.log(timings);
            var res =  await services.updateTodayData(totalTime.id,{...totalTime, Timings : [...timings]})
            setTotalTime(res)
        }
    }

    return (
        <div>
            <table className="table table-bordered table-hover table-striped table">
                <thead className="table">
                    <tr>
                        <th>In Time</th>
                        <th>Out Time</th>
                        <th>Work Description</th>
                        <th>Break Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {totalTime.Timings && totalTime.Timings.map(item => <tr key={item.id}>
                        <td>{item.InTime && item.InTime.slice(0,5)}</td>
                        <td>{item.OutTime && item.OutTime.slice(0,5)}</td>
                        <td>{item.WorkDescription}</td>
                        <td>{item.BreakDescription}</td>
                        <td className="cursor-pointer" onClick={() => handleEditClick(item.id)}  data-bs-toggle="modal" data-bs-target="#editTime"><i className="fa fa-edit"></i></td>
                        <td className="cursor-pointer" onClick={() => handleDeleteClick(item.id)} ><i className="fa fa-trash"></i></td>
                    </tr>)}
                   
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
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="closeIn" id="closeUpdate">Close</button>
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

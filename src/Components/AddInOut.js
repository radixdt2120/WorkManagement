import React, { useEffect, useState } from 'react'
import services from '../services/service'
import closeModal from '../utils/CloseModal'
import { getNowTime, getTodayDate, validateTime } from '../utils/Utility'

const initialForm = {
    InTime : "",
    WorkDescription : "",  
    OutTime : "",
    BreakDescription : "",
}

const AddInOut = ({totalTime, setTotalTime}) => {
    
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [formData, setFormData] = useState({...initialForm})    

    const [isOutTimeNull, setIsOutTimeNull] = useState(false)

    useEffect(() => {
        if(Object.keys(totalTime).length !== 0 && totalTime.Timings.length > 0){
            const myData = totalTime.Timings
            var lastnode = myData[myData.length-1]
            if(!(lastnode.OutTime === null) && !(lastnode.OutTime === "")){
                setIsOutTimeNull(false)
                setFormData({...initialForm})
            } else {
                setIsOutTimeNull(true)
                const tempForm = {...lastnode}
                delete tempForm.id
                setFormData({...tempForm})
            }
        } else {
            setIsOutTimeNull(false)
        }
    }, [totalTime])

    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData({...formData , [name] : value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(Object.keys(totalTime).length !== 0) {
            var isValid = true
            if(!isOutTimeNull){
                if(totalTime.Timings.length > 0){
                    isValid = validateTime(totalTime.Timings[totalTime.Timings.length-1].OutTime,formData.InTime)   
                } else {
                    isValid = true
                }
            } else {
                isValid = validateTime(formData.InTime,formData.OutTime)
            }

            if(isValid){
                if(isOutTimeNull) {
                    const tempData = totalTime.Timings.find(item => item.OutTime === null || item.OutTime === "")
                    tempData.OutTime = formData.OutTime
                    tempData.BreakDescription = formData.BreakDescription
                    tempData.WorkDescription = formData.WorkDescription
                } else {
                    totalTime.Timings.push({
                        ...formData,OutTime : null,
                    })
                }
            } else {
                alert("wrong entry")
                return
            }
            var res =  await services.updateTodayData(totalTime.id,totalTime)
            if(res){
                setTotalTime(res)
                setFormData({...formData , WorkDescription : ""})
                closeModal("closeIn")
                closeModal("closeOut")
                res = undefined
            }
        } else {
            const body = {
                user : "1", 
                Date : getTodayDate(),
                Day : dayOfWeek[new Date().getUTCDay()] ,
                Timings : [{
                    InTime : formData.InTime,
                    WorkDescription : formData.WorkDescription
                }]
            }

            var newData = await services.addNewData(body)
            if(newData) {
                setTotalTime(newData)
                const myModal = document.getElementById("closeIn")
                myModal.setAttribute('data-bs-dismiss', 'modal');
                myModal.click()
                newData = undefined
            }
        }
    }

    const handleBtnClick = () => {
        const nowTime = getNowTime()
        if(isOutTimeNull){
            setFormData({...formData,OutTime : nowTime, })
        } else {
            setFormData({...formData,InTime : nowTime,})
        }
    }

   

    return (
        <div className="d-flex justify-content-evenly h-100">
            <button className={`btn btn-success w-25 ${isOutTimeNull && "disabled"}`}  data-bs-toggle="modal" data-bs-target="#InModal" onClick={handleBtnClick}>
                In
            </button>
            <button className={`btn btn-danger w-25 ${!isOutTimeNull && "disabled"}`}  data-bs-toggle="modal" data-bs-target="#OutModal" onClick={handleBtnClick}>
                Out
            </button>

            <div className="modal fade" tabIndex="-1" id="InModal" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" >
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="modal-header  bg-success text-white">
                                <h5 className="modal-title">ADD IN TIME</h5>
                                <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body bg-light">
                                    <div className="d-flex justify-content-evenly gap-3 align-items-center my-2">
                                        <label htmlFor="inTime" className="h5">InTime</label>
                                        <input type="time"  className="form-control d-inline-block" id="inTime" name="InTime" value={formData.InTime} onChange={handleChange} step="2"/>
                                    </div>

                                    <div className="my-2">
                                        <label htmlFor="breakDesc" className="h5">Work description</label> <br />
                                        <textarea type="text"  className="form-control" rows="3" id="breakDesc" placeholder="Work you have/will do in this time ... " name="WorkDescription" value={formData.WorkDescription} onChange={handleChange} />
                                    </div>
                            </div>
                            <div className="modal-footer ">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="closeIn" >Close</button>
                                <button type="submit" className="btn btn-success" >Add in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="modal fade" tabIndex="2" id="OutModal" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" >
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="modal-header bg-danger text-white">
                                <h5 className="modal-title">ADD OUT TIME</h5>
                                <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body bg-light">
                                    <div className="d-flex justify-content-evenly gap-3 align-items-center my-2">
                                        <label htmlFor="inTime" className="h5">Out Time</label>
                                        <input type="time" step="2" className="form-control d-inline-block" id="inTime" name="OutTime" value={formData.OutTime} onChange={handleChange} />
                                    </div>

                                    <div className="my-2">
                                        <label htmlFor="breakDesc" className="h5">Break description</label> <br />
                                        <textarea type="text" className="form-control" rows="3" id="breakDesc" placeholder="Reason of break ... " name="BreakDescription" value={formData.BreakDescription} onChange={handleChange} />
                                    </div>
                            </div>
                            <div className="modal-footer ">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"  id="closeOut">Close</button>
                                <button type="submit" className="btn btn-danger" >Add Out</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddInOut

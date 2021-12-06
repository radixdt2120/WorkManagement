import React, { useEffect, useState } from 'react'
import services from '../services/service'
import { getNowTime, getTodayDate, validateTime } from '../utils/Utility'

const AddInOut = ({data, setData}) => {

    
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [formData, setFormData] = useState({
        InTime : null,
        WorkDescription : "",  
        OutTime : null,
        BreakDescription : "",
    })    

    const [isOutTimeNull, setIsOutTimeNull] = useState(false)

    useEffect(() => {
        console.log(data);
        if(Object.keys(data).length !== 0 && data.Timings.length > 0){
            const myData = data.Timings
            var lastnode = myData[myData.length-1]
            if(myData.length > 0 && !(lastnode.OutTime === null) && !(lastnode.OutTime === "")){
                setIsOutTimeNull(false)
            } else {
                setIsOutTimeNull(true)
            }
    
            if(myData.length > 0){
                const tempForm = {...lastnode}
                delete tempForm.id
                setFormData({...tempForm})
            }
        } 
    }, [data])

    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData({...formData , [name] : value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(Object.keys(data).length !== 0) {
            if(isOutTimeNull) {
                //const isValid = validateTime(formData.InTime,formData.OutTime)
                const isValid = validateTime(formData.InTime,formData.OutTime)
                console.log(isValid);
                if(isValid){
                    const tempData = data.Timings.find(item => item.OutTime === null || item.OutTime.includes("00:00:00"))
                    tempData.OutTime = formData.OutTime
                    tempData.BreakDescription = formData.BreakDescription
                    tempData.WorkDescription = formData.WorkDescription
                } else {
                    alert("wrong entry")
                    return
                }
            } else {
                data.Timings.push({
                    ...formData,OutTime : null,
                })
            }
            console.log(data);
            //const res =  await services.updateTodayData(data.id,data)
            const res =  await services.updateTodayData(data.id,data)
            if(res){
                setData(res)
                setFormData({...formData , WorkDescription : ""})
                const myModal = document.getElementById("InModal")
                myModal.setAttribute('data-bs-dismiss', 'modal');
                myModal.click()
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

            const newData = await services.addNewData(body)
            if(newData) {
                setData(newData)
                const myModal = document.getElementById("InModal")
                myModal.setAttribute('data-bs-dismiss', 'modal');
                myModal.click()
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
        <div className="d-flex justify-content-evenly">
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
                                        <input type="time" name="" className="form-control d-inline-block" id="inTime" name="InTime" value={formData.InTime} onChange={handleChange} step="-1" />
                                    </div>

                                    <div className="my-2">
                                        <label htmlFor="breakDesc" className="h5">Work description</label> <br />
                                        <textarea type="text" name="" className="form-control" rows="3" id="breakDesc" placeholder="Work you have/will do in this time ... " name="WorkDescription" value={formData.WorkDescription} onChange={handleChange} />
                                    </div>
                            </div>
                            <div className="modal-footer ">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
                                        <input type="time" name="" step="2" className="form-control d-inline-block" id="inTime" name="OutTime" value={formData.OutTime} onChange={handleChange} />
                                    </div>

                                    <div className="my-2">
                                        <label htmlFor="breakDesc" className="h5">Break description</label> <br />
                                        <textarea type="text" name="" className="form-control" rows="3" id="breakDesc" placeholder="Reason of break ... " name="BreakDescription" value={formData.BreakDescription} onChange={handleChange} />
                                    </div>
                            </div>
                            <div className="modal-footer ">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-danger" data-bs-dismiss="modal">Add Out</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddInOut

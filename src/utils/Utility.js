const getTodayDate = () =>{
    var todayDate = new Date().toISOString().slice(0, 10);
    return todayDate
}

const getNowTime = () => {
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    if(minute < 10) {
        minute = `0${minute}`
    }
    if(hour < 10){
        hour = `0${hour}`
    }
    return `${hour}:${minute}`
}

const validateTime = (inTime, outTime) => {
    console.log(inTime, outTime);
    const inHour = parseInt(inTime.split(":")[0])
    const inMinute = parseInt(inTime.split(":")[1])

    const outHour = parseInt(outTime.split(":")[0])
    const outMinute = parseInt(outTime.split(":")[1])
    
    const nowHour = parseInt(new Date().getHours())
    const nowMinute = parseInt(new Date().getMinutes())



    if(outHour < inHour || outHour > nowHour)
        return false
    
    if((outHour === inHour  && outMinute < inMinute) || (outHour === nowHour  && outMinute > nowMinute))
        return false
        
    // if(outHour === nowHour  && outMinute < nowMinute)
    //     return false
     
    return true

}

export {getTodayDate, getNowTime,validateTime}
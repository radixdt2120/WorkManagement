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

export {getTodayDate, getNowTime}
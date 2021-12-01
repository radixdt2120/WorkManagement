const getTodayDate = () =>{
    var year  = new Date().getFullYear()
    var month  = new Date().getMonth() +1
    month = month < 10 ? `0${month}` : month
    var day  = new Date().getDate()
    day = day < 10 ? `0${day}` : day
    const date = `${year}-${month}-${day}`
    return date
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
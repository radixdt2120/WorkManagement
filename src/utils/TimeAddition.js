const addTime = (fromTime , toTime) => {
    const fromTimeHour = parseInt(fromTime.split(":")[0])
    const fromTimeMinute = parseInt(fromTime.split(":")[1])

    const toTimeHour = parseInt(toTime.split(":")[0])
    const toTimeMinute = parseInt(toTime.split(":")[1])

    var hour = toTimeHour + fromTimeHour;
    var minute = toTimeMinute + fromTimeMinute;
    
    if(minute > 60){
        minute =  minute - 60;
        hour = hour + 1;
    }

    if(hour < 10){
        hour = `0${hour.toString()}`
    } 
    if(minute < 10){
        minute = `0${minute.toString()}`
    }
    return `${hour}:${minute}`

}


export default addTime
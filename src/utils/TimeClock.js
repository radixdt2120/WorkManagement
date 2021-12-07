const StratClock = (startTime,setTemp) => {
    console.log(startTime);
    var hour = parseInt(startTime.split(":")[0])
    var minute = parseInt(startTime.split(":")[1])
    console.log(hour,minute);
    if(minute === 59){
        minute = 0
        if(hour === 23){
            hour = 0
        } else {
            hour +=1
        }
    } else {
        minute = minute+1;
    }

    minute < 10 && (minute = `0${minute}`)
    
    hour < 10 && (hour = `0${hour}`)
    setTimeout(() => {setTemp(`${hour}:${minute}`)},60000)
}


export default StratClock
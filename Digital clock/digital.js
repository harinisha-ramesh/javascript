let ampm = document.getElementById("ampm")
function displayTime() {
    let dateTime = new Date()
    let hr = dateTime.getHours()
    let min = dateTime.getMinutes()
    let sec = dateTime.getSeconds()
    if (hr>12){
        hr = hr-12
        ampm.innerHTML = 'PM'
    }  
    else {
        ampm.innerHTML = 'AM'
    }   
    document.getElementById('hours').innerHTML = zero(hr)
    document.getElementById('mins').innerHTML = zero(min)
    document.getElementById('sec').innerHTML = zero(sec)
}
function zero(num){
    return num<10? "0"+num : num
    //this is the condition to get zero if the number is less than 10 then it will add the string "0" before the number or else the number only
    //will get displayed
}
setInterval(displayTime,1000)
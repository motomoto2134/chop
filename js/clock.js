let time = document.getElementById("time") 



function currentTime(){

let date=new Date()
let hours=date.getHours()
let minutes=date.getMinutes()
let seconds=date.getSeconds()
time.innerText=hours+":"+minutes+":"+seconds
//console.log(hours,minutes,seconds)
setTimeout(currentTime,1000)
time.style.background="blue"
time.style.color="red" 
}
currentTime()


























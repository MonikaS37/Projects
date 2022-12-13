//4 things we need to manipulate
//hours minutes seconds am/pm
//Reaching to that place in page
const hourEl = document.getElementById("hours")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

function updateClock(){
    //getting local time from our laptop
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"


    if(h > 12){
        h = h - 12
        ampm = "PM"
    } 

    if(h == 00){
        h = "12";
    }

    //to format clock as 00:00:00 conditional operator
    h = h < 10 ? "0" + h : h ;
    m = m < 10 ? "0" + m : m ;
    s = s < 10 ? "0" + s : s ;

    //storing localtime in html element
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText= ampm;
    
    //calling updateClock function for every second 1s=1000ms
    setTimeout(()=>{
        updateClock()
    },1000)
}

updateClock()
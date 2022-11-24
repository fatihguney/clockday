let userName = prompt("Lütfen İsminizi yazınız") 
let myName = document.querySelector("#myName")
myName.innerHTML = ` ${userName} `

showTime()

function showTime() {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let day = days[today.getDay()];
    m = checkTime(m);
    s = checkTime(s);
    
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = ` ${h + ":" + m + ":" + s} ${day}`  // document.getElementById("myClock").innerHTML = h + ":" + m + ":" + s;
    setTimeout(showTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
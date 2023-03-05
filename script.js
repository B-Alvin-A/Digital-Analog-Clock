const secHand = document.querySelector(".analog-clock .clock-second-hand");
const minHand = document.querySelector(".analog-clock .clock-minute-hand");
const houHand = document.querySelector(".analog-clock .clock-hour-hand");

const houDig = document.querySelector(".digital-clock .hour");
const minDig = document.querySelector(".digital-clock .minute");
const secDig = document.querySelector(".digital-clock .second");

checkTime = (i) => {
    if(i<10) {
        i = "0" + i;
    }
    return i;
}

setInterval(() => {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    secHand.style.transform = `rotate(${sec * 6}deg)`;
    minHand.style.transform = `rotate(${min * 6}deg)`;
    houHand.style.transform = `rotate(${hour * 30}deg)`;

    let m = checkTime(min);
    let s = checkTime(sec);
    houDig.innerText = `${hour}`;
    minDig.innerText = `${m}`;
    secDig.innerText = `${s}`;
},1000)
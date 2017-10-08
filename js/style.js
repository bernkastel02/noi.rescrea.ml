var days = 0;
var hours = 0;
var minutes = 0;
var seconds = 0;

setInterval(setTimer, 1000)

function setTimer() {
    if (hours == 23) {
        ++days
        hours = 0
        minutes = 0
        seconds = 0
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }
    else if (minutes == 59) {
        ++hours
        minutes = 0
        seconds = 0
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }
    else if (seconds == 59) {
        ++minutes
        seconds = 0
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }
    else {
        ++seconds
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }
}

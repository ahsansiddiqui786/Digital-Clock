let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let am_pm = document.getElementById("am_pm");

setInterval(() => {

    let currentDate = new Date();

    hour.innerHTML = currentDate.getHours();
    minute.innerHTML = currentDate.getMinutes();
    second.innerHTML = currentDate.getSeconds();

    if (hour >= 12) {
        am_pm.innerHTML = "AM"
    } else {
        am_pm.innerHTML = "PM"
    }

}, 1000);






function time() {

    let month = "";
    let dayName = "";
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();

    switch (new Date().getMonth()) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;

    }

    switch (new Date().getDay()) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
    }

    document.getElementById("year").innerText = new Date().getFullYear();

    document.getElementById("month").innerText = month;

    document.getElementById("day").innerText = new Date().getDate();

    document.getElementById("dayName").innerText = dayName.toUpperCase();

    document.getElementById("hour").innerText = hour < 10 ? "0" + hour : hour;

    document.getElementById("minute").innerText = minute < 10 ? "0" + minute : minute;

    document.getElementById("second").innerText = second < 10 ? "0" + second : second;
}
const repeat = setInterval(time, 1000);
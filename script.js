let myBirthday = new Date ([year],[month],[day][hour],[min])
let today = new Date()
let timeAliveMs = today - myBirthday

setInterval(function() {

    let today = new Date()
    let timeAliveMs = today - myBirthday

    let year = Math.floor(timeAliveMs / 31536000000)
    let yearR = timeAliveMs % 31536000000

    let month = Math.floor(yearR / 2629800000)
    let monthR = yearR % 2629800000

    let week = Math.floor(monthR / 604800000)
    let weekR = monthR % 604800000

    let day = Math.floor(weekR / 86400000)
    let dayR = weekR % 86400000

    let hour = Math.floor(dayR / 3600000)
    let hourR = dayR % 3600000

    let min = Math.floor(hourR / 60000)
    let minR = hourR % 60000

    let sec = Math.floor(minR / 1000)
    let secR = minR % 1000

    document.getElementById("timeAlive").innerHTML = year + " Years, " + month + " Months, " + week + " Weeks, " 
    + day + " Days, " + hour + " Hours, " + min + " Mintues, " + sec + " Seconds. "; 

}, 1000)

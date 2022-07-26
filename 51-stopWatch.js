let time = document.getElementById('time')
const start = document.getElementById('start')
const reset = document.getElementById('restart')
const pause = document.getElementById('pause')

let startTime = 0
let errorTime = 0
let repeatIntervel

start.addEventListener('click', startFunc)
reset.addEventListener('click', resetFunc)
pause.addEventListener('click', () => clearInterval(repeatIntervel))

function resetFunc() {
    startTime = 0
    errorTime = 0
    clearInterval(repeatIntervel)
    time.innerHTML = '00:00:00'
}

// start btn functinality
function startFunc() {
    startTime = Date.now() - errorTime
    repeatIntervel = setInterval(errHandling, 10)
}

function errHandling(params) {
    errorTime = Date.now() - startTime

    let milliseconds = Math.floor((errorTime) % 60)
    let secs = Math.floor((errorTime / 1000) % 60)
    let mins = Math.floor((errorTime / (1000 * 60)) % 60)
    let hrs = Math.floor((errorTime / (1000 * 60 * 60)) % 60)

    milliseconds = convert(milliseconds)
    secs = convert(secs)
    mins = convert(mins)
    hrs = convert(hrs)

    show(hrs, mins, secs, milliseconds)
}

function convert(time) {
    time = time.toString()
    return time.length < 2 ? "0" + time : time
}

function show(hr, mins, secs, milliseconds) {
    time.innerHTML = `${hr}:${mins}:${secs}:${milliseconds}`
}



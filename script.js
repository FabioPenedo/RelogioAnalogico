const qS = (el)=>document.querySelector(el);
let digitalElement = qS('.digital');
let sElement = qS('.p_s');
let mElement = qS('.p_m');
let hElement = qS('.p_h');

function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    if(second){
        playSound();
    }

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`
    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) + ((30/60) * minute) - 90;
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time){
    return time < 10 ? '0'+time : time;
}

function playSound(){
    let audioElement = qS('#sound');
    audioElement.currentTime = 0;
    audioElement.play()

}

setInterval(updateClock, 1000);
updateClock();
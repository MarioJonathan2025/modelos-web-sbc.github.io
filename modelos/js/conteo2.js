//CONTEGGIO ALLA ROVESCIA 2
const Days = document.getElementById('days-2');
const Hours = document.getElementById('hours-2');
const Minutes = document.getElementById('minutes-2');
const Seconds = document.getElementById('seconds-2');

const target_2_Date = new Date("December 25, 2025 00:00:00").getTime();

function timer(){
    const currentDate = new Date().getTime();
    const distance = target_2_Date - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance /1000 /60 /60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    //console.log(days + ":" + hours + ":" + minutes + ":" + seconds);

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    if(distance < 0){
        Days.innerHTML = "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";
    }
}

setInterval(timer, 1000);//hara que se repita cada 1000ms (1seg)
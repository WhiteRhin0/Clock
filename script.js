const DEGREE = 6;
const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * DEGREE;
    let ss = day.getSeconds() * DEGREE;

    hour.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
})



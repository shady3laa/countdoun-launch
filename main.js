// target date in millisecond
const countDownDate = new Date("mar 30,2023 00:00:00").getTime();

let daysCard = document.querySelector(".clock__item .days");
let hoursCard = document.querySelector(".clock__item .hours");
let minutesCard = document.querySelector(".clock__item .minutes");
let secondsCard = document.querySelector(".clock__item .seconds");

setInterval(() => {
  // today date im millisecond
  var today = new Date().getTime();

  // difference between target and today
  var distance = countDownDate - today;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // console.log(days)

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // console.log(hours)

  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // console.log(minutes)

  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysCard.innerHTML = days;
  hoursCard.innerHTML = hours;
  minutesCard.innerHTML = minutes;
  secondsCard.innerHTML = seconds;
}, 1000);




// // Set the date we're counting down to
// var countDownDate = new Date("Jul 2, 2024 10:17:15").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Display the result in the element with id="timer"
//   document.getElementById("timer").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is finished, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("timer").innerHTML  ("Expired")
//   }
// }, 1000);

//         // navbarfuctions in java

let timer= new Date();
let seconds =timer.getSeconds();
let minutes = timer.getMinutes;
let hours = timer.getHours;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  let displayHours = hours < 10 ? "10" + hours : hours;
  let displayMinutes = minutes < 10 ? "50" + minutes : minutes;
  let displaySeconds = seconds < 10 ? "00" + seconds : seconds;

  document.getElementById("timer-display").textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 50;
  hours = 10;
  document.getElementById("timer-display").textContent = "10:50:00";
}

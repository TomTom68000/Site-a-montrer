let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 74;
let speed = 20;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #f9004d ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);




















// let progressBar = document.querySelector(".circular-progress2");
// let valueContainer = document.querySelector(".value-container2");

// let progressValue = 0;
// let progressEndValue = 50;
// let speed = 20;

// let progress = setInterval(() => {
//   progressValue++;
//   valueContainer.textContent = `${progressValue2}%`;
//   progressBar.style.background = `conic-gradient(
//       #f9004d ${progressValue * 3.6}deg,
//       #cadcff ${progressValue * 3.6}deg
//   )`;
//   if (progressValue == progressEndValue) {
//     clearInterval(progress);
//   }
// }, speed);


// let maxBar = 100;
// let currentBar = 0;
// let progressBar;
// let intervalId;

// let initialisation = function() {
//   progressBar = document.getElementById( "circular-progress2" );
//   progressBar.value = currentBar;
//   progressBar.max = maxBar;
// }

// let displayBar = function() {
//   currentBar++;
//   progressBar.value = currentBar;
// }
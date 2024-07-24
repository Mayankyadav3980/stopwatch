// getting the required html elements
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

//initializing some variables
let flag = false;
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

// making start, stop, reset button to listen  click events
startBtn.addEventListener('click', () => {
  flag = true;
  startBtn.setAttribute("disabled", "true");
  stopWatch();
})

stopBtn.addEventListener("click", (e) => {
  startBtn.removeAttribute("disabled");
  flag = false;
});

resetBtn.addEventListener("click", (e) => {
  startBtn.removeAttribute("disabled");
  flag = false;
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
});


// function to handle logic to display the time in stopwatch
function stopWatch() {
  if (flag) {
    count++;

    if (count == 100) {
      second++;
      count = 0;
    }

    if (second == 60) {
      minute++;
      second = 0;
    }

    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    let hrString = hour;
    let minString = minute;
    let secString = second;
    let countString = count;

    if (hour < 10) {
      hrString = "0" + hrString;
    }

    if (minute < 10) {
      minString = "0" + minString;
    }

    if (second < 10) {
      secString = "0" + secString;
    }

    if (count < 10) {
      countString = "0" + countString;
    }

    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    setTimeout(stopWatch, 10);
  }
}
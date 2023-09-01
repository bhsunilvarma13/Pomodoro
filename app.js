const text = document.getElementById("text");

let timer;
let seconds = 0;
let minutes = 25;

document.getElementById("start").addEventListener("click", () => {
  document.body.style.backgroundColor = "#FF6347";
  if (timer) return;
  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        document.body.style.backgroundColor = "#016A70";
        clearInterval(timer);
        timer = null;
        document.title = "Pomodoro | Time up";
        return;
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    text.innerText = `${minutes < 10 ? "0" + minutes.toString() : minutes}:${
      seconds < 10 ? "0" + seconds.toString() : seconds
    }`;
    document.title = `Pomodoro | ${text.innerText}`;
  }, 1);
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  minutes = 25;
  seconds = 0;
  document.body.style.backgroundColor = "#F2BE22";
  document.title = "Pomodoro";
  text.innerText = "25:00";
});

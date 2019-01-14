let countdown;

const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

const timer = seconds => {
  clearInterval(countdown);

  const now = Date.now();
  const returnTime = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayReturnTime(returnTime);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((returnTime - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
};

const displayTimeLeft = seconds => {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  const display = `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
  document.title = display;
  timerDisplay.textContent = display;
};

const displayReturnTime = time => {
  const returnTime = new Date(time);
  const hours = returnTime.getHours();
  const minutes = returnTime.getMinutes();
  endTime.textContent = `Be Back At ${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
};

const startTimer = e => {
  const seconds = parseInt(e.target.dataset.time);
  timer(seconds);
};

const handleCustomForm = e => {
  e.preventDefault();
  const mins = e.target.minutes.value;
  timer(mins * 60);
  e.target.reset();
};

buttons.forEach(button => button.addEventListener("click", startTimer));

document.customForm.addEventListener("submit", handleCustomForm);

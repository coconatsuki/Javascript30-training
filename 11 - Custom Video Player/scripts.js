// Get our elements
const video = () => document.querySelector(".player__video.viewer");
const progressBar = () => document.querySelector(".progress__filled");
const playerButton = () =>
  document.querySelector(".player__button[title='Toggle Play']");
const volumeSlider = () =>
  document.querySelector('.player__slider[name="volume"]');
const playBackSlider = () =>
  document.querySelector('.player__slider[name="playbackRate"]');
const tenSecondsButton = document.querySelector(
  ".player__button[data-skip='-10']"
);
const twentyFiveSecondsButton = document.querySelector(
  ".player__button[data-skip='25']"
);

// Build up our function
const togglePlayPause = () => {
  if (playerButton().classList.contains("toggle")) {
    playerButton().classList.remove("toggle");
    playerButton().textContent = "| |";
    video().play();
  } else {
    playerButton().classList.add("toggle");
    playerButton().textContent = "►";
    video().pause();
  }
};

const updateProgressBar = e => {
  progressBar().style.setProperty(
    "flex-basis",
    `${(e.target.currentTime * 100) / e.target.duration}%`
  );
};

const changeVolume = e => {
  video().volume = e.target.value;
};

const changePlayback = e => {
  video().playbackRate = e.target.value;
};

const tenSecondsBack = e => {
  video().currentTime -= 25;
};

const twentyFiveSecondsForward = e => {
  video().currentTime += 25;
};

// Hook up the event listeners

playerButton().addEventListener("click", togglePlayPause);
video().addEventListener("click", togglePlayPause);
video().addEventListener("timeupdate", updateProgressBar);
volumeSlider().addEventListener("input", changeVolume);
playBackSlider().addEventListener("input", changePlayback);
tenSecondsButton.addEventListener("click", tenSecondsBack);
twentyFiveSecondsButton.addEventListener("click", twentyFiveSecondsForward);

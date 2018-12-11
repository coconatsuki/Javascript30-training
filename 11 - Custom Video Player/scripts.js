// Get our elements
const videoPlayer = document.querySelector(".player");
const video = () => document.querySelector(".player__video.viewer");
const progressBar = () => document.querySelector(".progress__filled");
const progressBarBackground = () => document.querySelector(".progress");
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
    playerButton().textContent = "❚ ❚";
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

const changeCurrentTime = e => {
  video().currentTime = video().currentTime + e;
};

updateVideoPosition = e => {
  video().currentTime =
    (e.offsetX * video().duration) / videoPlayer.clientWidth;
  progressBar().style.setProperty(
    "flex-basis",
    `${(e.offsetX * 100) / videoPlayer.clientWidth}%`
  );
};

// Hook up the event listeners

playerButton().addEventListener("click", togglePlayPause);
video().addEventListener("click", togglePlayPause);
video().addEventListener("timeupdate", updateProgressBar);
volumeSlider().addEventListener("input", changeVolume);
playBackSlider().addEventListener("input", changePlayback);
tenSecondsButton.addEventListener("click", () => changeCurrentTime(-10));
twentyFiveSecondsButton.addEventListener("click", () => changeCurrentTime(+25));
progressBarBackground().addEventListener("click", updateVideoPosition);

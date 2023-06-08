const audio = document.getElementById("audio");

console.log(audio.autoplay);

// setInterval(checkTreckFinished, 100);

function checkTreckFinished() {
  if (audio.currentTime >= audio.duration) {
    document.getElementById("play").classList.remove("hidden");
    document.getElementById("pause").classList.add("hidden");
  }
}

const playThat = () => {
  audio.play();
  document.getElementById("play").classList.add("hidden");
  document.getElementById("pause").classList.remove("hidden");
};

const pauseThat = () => {
  audio.pause();
  document.getElementById("play").classList.remove("hidden");
  document.getElementById("pause").classList.add("hidden");
};

const showAddress = () => {
  document.getElementById("address").classList.remove("addHide");
};

const closeAddress = () => {
  document.getElementById("address").classList.add("addHide");
};

const flip = () => {
  document.getElementById("front").classList.toggle("hideCard");
  document.getElementById("back").classList.toggle("hideCard");
};

window.onload = function () {
  audio.play();
};

// audio.play();

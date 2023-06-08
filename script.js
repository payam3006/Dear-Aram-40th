const audio = document.getElementById("audio");
const box = document.getElementById("address");

// console.log(audio.autoplay);

setInterval(checkTreckFinished, 100);

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
  document.getElementById("address").classList.add("show");
  setTimeout(function () {
    document.addEventListener("click", closeAddress);
  }, 10);
};

const closeAddress = (event) => {
  if (!box.contains(event.target)) {
    closeAddress0();
  }
};

const closeAddress0 = () => {
  document.getElementById("address").classList.remove("show");
  document.removeEventListener("click", closeAddress);
};

const flip = () => {
  document.getElementById("container").classList.toggle("hideCard");
  //   document.getElementById("back").classList.toggle("hideCard");
};

const startPlay = function () {
  document.removeEventListener("click", startPlay);
  box.classList.remove("hidden");
  playThat();
};

document.addEventListener("click", startPlay);

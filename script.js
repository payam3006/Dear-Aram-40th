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
  IsAddressOpen = true;
  document.getElementById("address").classList.remove("addHide");
};

const closeAddress = () => {
  document.getElementById("address").classList.add("addHide");
  IsAddressOpen = false;
};

const flip = () => {
  document.getElementById("container").classList.toggle("hideCard");
  //   document.getElementById("back").classList.toggle("hideCard");
};

const startPlay = function () {
  document.removeEventListener("click", startPlay);
  playThat();
};

document.addEventListener("click", startPlay);

// function closeAddress0(event) {
//   const elem = document.getElementById("address");
//   //   console.log(event.target.is(elem));
//   console.log(event.target);
// }

// document.addEventListener("click", closeAddress0);
// // audio.play();

const box = document.getElementById("address");

const isAddressOpen = () => {
  return !box.classList.contains("addHide");
};

// IsAddressOpen = false;

document.addEventListener("click", (event) => {
  if (isAddressOpen()) {
    if (!box.contains(event.target)) {
      closeAddress();
    }
  }
});

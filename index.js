const button = document.querySelectorAll(".drum");

for (let i = 0; i < button.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let flag = this.innerHTML;

    makeSound(flag);
    animation(flag);
  });
}

document.addEventListener("keydown", function (e) {
  makeSound(e.key);
  animation(e.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
      break;
  }
}

function animation(key) {
  let activeButton = document.querySelector("." + key);

  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

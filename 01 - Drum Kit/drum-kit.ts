function handleKeyDown(e: KeyboardEvent): any {
  //selecting the audio and corresponding key elements
  const audio = document.querySelector(
    `audio[data-key="${e.keyCode}"]`
  ) as HTMLAudioElement;

  const key = document.querySelector(
    `.key[data-key="${e.keyCode}"]`
  ) as HTMLAudioElement;

  //stop the function from running if there is no audio
  if (!audio) {
    return;
  }

  audio.currentTime = 0; //rewinds audio to the start of the audio
  audio?.play();
  key.classList.add("playing");
}

function removeTransition(e: TransitionEvent): any {
  //skip the function if the element doesn't have a transform property
  if (e.propertyName !== "transform") {
    return;
  }
  const target = e.target as HTMLElement;
  target.classList.remove("playing");
}

const keys = document.querySelectorAll(".key") as NodeList;

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

//keydown event listener to the window object?
window.addEventListener("keydown", handleKeyDown);

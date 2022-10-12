const secondsHand = document.querySelector(".second-hand") as HTMLElement;
const miniutesHand = document.querySelector(".miniute-hand") as HTMLElement;
const hoursHand = document.querySelector(".hour-hand") as HTMLElement;

const rotateElement = (element: HTMLElement, rotateDegree: number) => {
  element.style.transform = `rotate(${rotateDegree}deg)`;
};

function getAndSetTime() {
  const now: Date = new Date();

  // handle seconds
  const seconds: number = now.getSeconds();
  const secondsInDegrees: number = (seconds / 60) * 360 + 90;
  rotateElement(secondsHand, secondsInDegrees);

  //handle miniutes
  const miniutes: number = now.getMinutes();
  const miniutesInDegrees: number =
    (miniutes / 60) * 360 + (seconds / 60) * 6 + 90;
  rotateElement(miniutesHand, miniutesInDegrees);

  //handle hours
  const hour: number = now.getHours();
  const hourInDegrees: number = (hour / 12) * 360 + (miniutes / 60) * 30 + 90;
  rotateElement(hoursHand, hourInDegrees);
}

setInterval(getAndSetTime, 1000);

getAndSetTime();

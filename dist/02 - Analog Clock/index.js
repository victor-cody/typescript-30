"use strict";
const secondsHand = document.querySelector(".second-hand");
const miniutesHand = document.querySelector(".miniute-hand");
const hoursHand = document.querySelector(".hour-hand");
const rotateElement = (element, rotateDegree) => {
    element.style.transform = `rotate(${rotateDegree}deg)`;
};
function getAndSetTime() {
    const now = new Date();
    // handle seconds
    const seconds = now.getSeconds();
    const secondsInDegrees = (seconds / 60) * 360 + 90;
    rotateElement(secondsHand, secondsInDegrees);
    //handle miniutes
    const miniutes = now.getMinutes();
    const miniutesInDegrees = (miniutes / 60) * 360 + (seconds / 60) * 6 + 90;
    rotateElement(miniutesHand, miniutesInDegrees);
    //handle hours
    const hour = now.getHours();
    const hourInDegrees = (hour / 12) * 360 + (miniutes / 60) * 30 + 90;
    rotateElement(hoursHand, hourInDegrees);
}
setInterval(getAndSetTime, 1000);
getAndSetTime();

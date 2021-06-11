console.log("I'm a javascript");

const raceCanvas = document.getElementById("canvas");
const context = raceCanvas.getContext("2d");
document.getElementById("game-board").style.display = "none";
document.getElementById("start-button").onclick = () => {
  document.getElementById("game-board").style.display = "block";
  startGame();
};


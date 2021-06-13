console.log("I'm a javascript");

const raceCanvas = document.getElementById("canvas");
const context = raceCanvas.getContext("2d");
document.getElementById("game-board").style.display = "none";
document.getElementById("currentPrice").style.display = "none";
var customerName = prompt("Please enter your name to start the Game", "<your name goes here>");
if (customerName!= null) {
  document.getElementById("welcome").innerHTML = "Hello " + customerName;
}

document.getElementById("start-button").onclick = () => {
  document.getElementById("game-board").style.display = "block"; 
  document.querySelector(".section-right").style.display ="none";
  document.getElementById("initialPrice").style.display = "none";
  document.getElementById("currentPrice").style.display = "block";
  startGame();
};

let currentGame;
function startGame() {
  currentGame = new Game();
  //Instantiate new hacker
  let currentHacker = new Hacker();
  //Assign my new hacker to my new game
  currentGame.hacker = currentHacker;
  currentGame.hacker.draw();
  updateCanvas();
};

function detectCollision(bug) { //try to comment out to see what happens
  return !(
    currentGame.hacker.x > bug.x + bug.width || // detect from right
    currentGame.hacker.x + currentGame.hacker.width < bug.x || // detect colision from left
    currentGame.hacker.y > bug.y + bug.height // detect colisiojn from top
  );
}

function scoreBump(score) { //try to comment out to see what happens
  return (
    currentGame.score > 10000
  );
}

function updateCanvas() {
  context.clearRect(0, 0, raceCanvas.clientWidth, raceCanvas.clientHeight);
  currentGame.hacker.draw();
  currentGame.bugsFrequency++;
  if (currentGame.bugsFrequency % 100 === 1) {
    const randomBugX = Math.floor(Math.random() * 450);
    const randomBugY = 0;
    const randomBugWidth = Math.floor(Math.random() * 50) + 20;
    const randomBugHeight = Math.floor(Math.random() * 50) + 20;
    const newBug = new Bug(
      randomBugX,
      randomBugY,
      randomBugWidth,
      randomBugHeight
    );
    currentGame.bugs.push(newBug);
  }
  currentGame.bugs.forEach((bug, index) => {
    bug.y += 1;
    bug.draw();
      if (scoreBump(score)) {
      alert('Try UX Bootcamp! Game Over')
      };
    // if (detectCollision(bug)) {
    //   currentGame.gameOver = true;
    //   currentGame.bugsFrequency = 0;
    //   currentGame.score = 0;
    //   currentGame.bugs = [];
    //   document.getElementById("score").innerHTML = 0;
    //   document.getElementById("game-board").style.display = "none";
    //   alert('BOOOOM! Game Over')
    // };


    if (bug.y > raceCanvas.height) {
      currentGame.score+= 100;
      document.getElementById("score").innerHTML = currentGame.score;
      currentGame.bugs.splice(index, 1);
    }
  });
  // requestAnimationFrame(updateCanvas); // 22. The game keeps playing even if we don't see so:
  if (!currentGame.gameOver) {
    currentGame.animationId = requestAnimationFrame(updateCanvas);
  }
}
//hacker move event listener
document.addEventListener("keydown", (keyboardEvent) => {
  currentGame.hacker.moveHacker(keyboardEvent.key);
});

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

document.addEventListener('keydown', (e) => {
  e.preventDefault()
  currentGame.hacker.moveHacker(e.keyCode);
  // currentGame.fire.moveFire(e.keyCode);
  if (e.keyCode === 32) {
      currentGame.fires.push(new Fire(currentGame.hacker.x+29.5));
      fire.play();
  }
});


let currentGame;
function startGame() {
  currentGame = new Game();
  let currentHacker = new Hacker();
  currentGame.hacker = currentHacker;
  currentGame.hacker.draw();
  currentFire = new Fire();
  currentGame.fire = currentFire;
  currentGame.fire.draw();
updateCanvas();
};




function scoreBump(score) {
  return (
    currentGame.score > 10000
  );
}

function updateCanvas() {
  context.clearRect(0, 0, raceCanvas.clientWidth, raceCanvas.clientHeight);
  currentGame.hacker.draw();
  currentGame.bugsFrequency++;
  currentGame.firesFrequency++;

  // if (currentGame.firesFrequency % 100 === 1) {
  //   const randomFireX = Math.floor(Math.random() * 1024);
  //   const newFire = new Fire(
  //     randomFireX,
  //   );
  //   currentGame.fires.push(newFire);
  // }
  
  currentGame.fires.forEach((fire, index) => {
    fire.y -= 6;
    fire.draw();
    if (fire.y < 0) {
        currentGame.fires.splice(index, 1);
    }
})

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
      currentGame.gameOver = true;
      currentGame.bugsFrequency = 0;
      currentGame.score = 0;
      currentGame.bugs = [];
      document.getElementById("score").innerHTML = 0;
      document.getElementById("game-board").style.display = "none";
      alert('Try UX Bootcamp! Game Over')
      };

    if (bug.y > raceCanvas.height) {
      currentGame.score+= 100;
      document.getElementById("score").innerHTML = currentGame.score;
      currentGame.bugs.splice(index, 1);
    }
  });

  if (!currentGame.gameOver) {
    currentGame.animationId = requestAnimationFrame(updateCanvas);
  }
}



console.log("I'm a javascript");

const hackingCanvas = document.getElementById("canvas");
const context = hackingCanvas.getContext("2d");
document.getElementById("game-board").style.display = "none";
document.getElementById("currentPrice").style.display = "none";
document.getElementById("finished").style.display = "none";
var customerName = prompt("Please enter your name to start the Game", "<your name goes here>");
if (customerName!= null) {
  document.getElementById("welcome").innerHTML = "Hello " + customerName;
}

document.getElementById("start-button").onclick = () => {
  document.getElementById("game-board").style.display = "block"; 
  document.getElementById("section-right").style.display ="none";
  document.getElementById("initialPrice").style.display = "none";
  document.getElementById("finished").style.display = "none";
  document.getElementById("currentPrice").style.display = "block";
  document.getElementById("section-bottom").style.display = "none";
  document.getElementById("start-button").style.display = "none";
  startGame();
};

document.addEventListener('keydown', (e) => {
  e.preventDefault()
  currentGame.hacker.moveHacker(e.keyCode);
  if (e.keyCode === 32) {
      currentGame.fires.push(new Fire(currentGame.hacker.x+29.5));
  }
});

let currentGame;
let bugsFrequency = 0;
function startGame() {
  currentGame = new Game();
  let currentHacker = new Hacker();
  currentGame.hacker = currentHacker;
  currentGame.hacker.draw();
  currentFire = new Fire();
  currentGame.fire = currentFire;
  currentGame.fire.draw();
  checkBugs();
  updateCanvas();
};

function updateCanvas() {
  context.clearRect(0, 0, hackingCanvas.clientWidth, hackingCanvas.clientHeight);
  currentGame.hacker.draw();
  currentGame.bugsFrequency++;
  currentGame.firesFrequency++;
  currentGame.fires.forEach((fire, index) => {
    fire.y -= 6;
    fire.draw();
    if (fire.y < 0) {
        currentGame.fires.splice(index, 1);
    }
  })

  bugsFrequency++;
  console.log(bugsFrequency)
  if (bugsFrequency < 500 && bugsFrequency % 100 === 1 ||
  bugsFrequency > 500 && bugsFrequency % 80 === 0) {
    const randomBugX = Math.floor(Math.random() * 600);
    const randomBugY = 0;
    const newBug = new Bug(
      randomBugX,
      randomBugY
    );
    currentGame.bugs.push(newBug);
    }

  currentGame.bugs.forEach((bug, index) => {
    bug.y += 1;
    bug.draw();

    currentGame.fires.forEach((fire, i) => {
      if (detectCollisionFire(bug, fire)) {
        bug.blow = true
        currentGame.fires.splice(i, 1)
        currentGame.score-= 100;
        document.getElementById('score').innerHTML = currentGame.score;
      }
    });

    if (detectCollision(bug)) {
      bug.blow = true
      currentGame.score-=100;
      document.getElementById('score').innerHTML = currentGame.score;
    }

      if (scoreBump(score)) {
      currentGame.gameOver = true;
      currentGame.bugsFrequency = 0;
      currentGame.score = 0;
      currentGame.bugs = [];
      document.getElementById("score").innerHTML = current.score;
      document.getElementById("game-board").style.display = "none";
      alert('Try UX Bootcamp! Game Over')
      };

      if (scoreFinished(score)) {
        currentGame.gameOver = true;
        document.getElementById("game-board").style.display = "none";
        document.getElementById("finished").style.display = "block";
        document.getElementById("score").innerHTML = 0;
      }

    if (bug.y > hackingCanvas.height) {
      currentGame.score+= 100;
      document.getElementById("score").innerHTML = currentGame.score;
      currentGame.bugs.splice(index, 1);
    }
  });

  if (!currentGame.gameOver) {
    currentGame.animationId = requestAnimationFrame(updateCanvas);
  }

  if (currentGame.score === 5000) {
    rakoon.draw()
  }

}



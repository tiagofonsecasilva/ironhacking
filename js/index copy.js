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
  document.querySelector(".section-right").style.display ="none";
  document.getElementById("initialPrice").style.display = "none";
  document.getElementById("currentPrice").style.display = "block";
  startGame();
};

document.addEventListener('keydown', (e) => {
  e.preventDefault()
  currentGame.hacker.moveHacker(e.keyCode);
  if (e.keyCode === 32) {
      currentGame.fires.push(new Fire(currentGame.hacker.x+29.5));
  }
});

function checkBugs() {
  setInterval(() => {
      currentGame.bugs.forEach((bug, index) => {
          if(bug.blow) {
           currentGame.bugs.splice(index, 1)
      }
      })
  }, 1000)
}


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

function detectCollision(bug) {
  return !((currentGame.hacker.x > bug.x + bug.width) ||
      (currentGame.hacker.x + currentGame.hacker.width < bug.x) ||
      (currentGame.hacker.y > bug.y + bug.height))
}
function detectCollisionFire(bug, fire) {

  return !((fire.x > bug.x + bug.width) ||
      (fire.x + fire.width < bug.x) ||
      (fire.y > bug.y + bug.height))
}

function scoreBump(score) {
  return (
    currentGame.score > 10000
  );
}

function scoreFinished(score) {
  return (
    currentGame.score < 0
  );
}


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
    const randomBugX = Math.floor(Math.random() * 895);
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
        currentGame.score-= 3000;
        document.getElementById('score').innerHTML = currentGame.score;
      }
    });

    if (detectCollision(bug)) {
      bug.blow = true
      currentGame.score--;
      document.getElementById('score').innerHTML = currentGame.score;
    }

      if (scoreBump(score)) {
      currentGame.gameOver = true;
      currentGame.bugsFrequency = 0;
      currentGame.score = 0;
      currentGame.bugs = [];
      document.getElementById("score").innerHTML = 0;
      document.getElementById("game-board").style.display = "none";
      alert('Try UX Bootcamp! Game Over')
      };

      if (scoreFinished(score)) {
        document.getElementById("game-board").style.display = "none";
        document.getElementById("finished").style.display = "block";
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
}



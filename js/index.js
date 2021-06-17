console.log("I'm a javascript");

const hackingCanvas = document.getElementById("canvas");
const context = hackingCanvas.getContext("2d");
document.getElementById("gameCanvas").style.display = "none";
document.getElementById("currentPrice").style.display = "none";
document.getElementById("restart-button").style.display = "none";
// document.getElementById("player").style.display = "none";
const customerName = prompt("Please enter your name to start the Game", "<your name goes here>");
if (customerName!= null) {
  document.getElementById("welcome").innerHTML = "Hello " + customerName;
}

document.getElementById("start-button").onclick = () => {
  audio.pause()
  document.querySelector(".align-middle").style.display = "none";
  document.getElementById("gameCanvas").style.display = "block"; 
  document.getElementById("initialPrice").style.display = "none";
  document.getElementById("button").style.display = "none";
  document.getElementById("start-button").style.display = "none";
  document.getElementById("restart-button").style.display = "block";
  // document.getElementById("finished").style.display = "none";
  document.getElementById("currentPrice").style.display = "block";
  startGame();
};

document.getElementById("restart-button").onclick = () => {
  document.getElementById("initialPrice").style.display = "none";
  onClick=window.location.reload();
}

document.addEventListener('keydown', (e) => {
  e.preventDefault()
  currentGame.hacker.moveHacker(e.keyCode);
  if (e.keyCode === 32) {
      currentGame.fires.push(new Fire(currentGame.hacker.x+20));
      fire.play();
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
  song.play();
  song.volume = 0.1;
  checkBugs();
  updateCanvas();
};

function updateCanvas() {
  context.clearRect(0, 0, hackingCanvas.clientWidth, hackingCanvas.clientHeight);
  currentGame.hacker.draw();
  currentGame.bugsFrequency++;
  currentGame.firesFrequency++;
  currentGame.fires.forEach((fire, index) => {
    fire.y-=15;
    fire.draw();
    if (fire.y < 0) {
        currentGame.fires.splice(index, 1);
    }
  })

  bugsFrequency++;
  console.log(bugsFrequency)
  if (bugsFrequency < 500 && bugsFrequency % 100 === 1 ||
  bugsFrequency > 500 && bugsFrequency % 80 === 0) {
    const randomBugX = Math.floor(Math.random() * (700 - 200) + 200);
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
        bug.clean = true
        clean.play();
        currentGame.fires.splice(i, 1)
        currentGame.score-= 500;
        document.getElementById('score').innerHTML = currentGame.score;
      }
    });

    if (detectCollision(bug)) {
      bug.clean = true
      clean.play();
      currentGame.bugs.splice(index, 1)
      currentGame.score-= 500;
      document.getElementById('score').innerHTML = currentGame.score;
    }

      if (currentGame.score >= 7000) {
      document.querySelector("canvas").style.backgroundImage = "url('../images/raccon2.gif')";
      currentGame.gameOver = true;
      song.pause();
      fire.volume = 0;
      currentGame.bugsFrequency = 0;
      currentGame.bugs = [];
      document.getElementById("score").innerHTML = 10000;
      setTimeout(function(){
        alert('Try UX Bootcamp! Your Web-Dev Bootcamp will be very expensive! Your Game is Over! Try again');
      }, 1000);
      };


    if (currentGame.score === 1400) {
      document.querySelector("canvas").classList.add("racoon");
      setTimeout(function(){
      window.alert("console.log(Well done, keep cleaning, you're becoming a FullStack)");
    }, 500);
      fire.volume = 0;
      currentGame.score-= 100;
      setTimeout(function(){
        document.querySelector("canvas").classList.remove("racoon");
      }, 1000);
    }

    if (currentGame.score === 4000) {
      document.querySelector("canvas").classList.add("pride");
      setTimeout(function(){
        window.alert("console.log(Fight for Equality)");
      }, 500);
      fire.volume = 0;
      currentGame.score-= 100;
      setTimeout(function(){
        document.querySelector("canvas").classList.remove("pride");
      }, 1000);
    }

        if (currentGame.score <= 0) {
        document.querySelector("canvas").style.backgroundImage = "url('../images/raccon.gif')";
        currentGame.gameOver = true;
        song.pause();
        fire.volume = 0;
        currentGame.bugsFrequency = 0;
        currentGame.score = 0;
        currentGame.bugs = [];
        document.getElementById("score").innerHTML = 0;
        setTimeout(function(){
          window.alert("console.log(Congratulations, your code is now clean, you're a winner, your Bootcamp won't cost you a penny. Grab a beer))");
        }, 1000);
      };

    if (bug.y > hackingCanvas.height) {
      currentGame.score+= 300;
      document.getElementById("score").innerHTML = currentGame.score;
      currentGame.bugs.splice(index, 1);
    }
  });

  if (!currentGame.gameOver) {
    currentGame.animationId = requestAnimationFrame(updateCanvas);
  }

}



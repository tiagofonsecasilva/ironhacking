let currentGame;
let bugsFrequency = 0;
let animationId;

let burst = new Audio("./audio/Bug.mp3");
//let game = new Audio("./audio/game.mp3")
let fire = new Audio("./audio/fire.mp3");
let song = new Audio("./audio/game.mp3");

if (typeof song.loop == 'boolean')
{
    song.loop = true;
}
else
{
    song.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}






const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
document.getElementById('game-board').style.display = 'none';
const backgroundArray = ['/images/green-field.jpg', '/images/park.jpg', '/images/florest.jpg','/images/florest2.jpg']
const randomIndex = Math.floor(Math.random() * backgroundArray.length)

canvas.style.backgroundImage = `url('${backgroundArray[randomIndex]}')`;

document.getElementById('start-button').onclick = () => {
    startGame();
}

document.addEventListener('keydown', (e) => {
    e.preventDefault()
    currentGame.hacker.moveHacker(e.keyCode);
    // currentGame.fire.moveFire(e.keyCode);
    if (e.keyCode === 66) {
        currentGame.fires.push(new Fire(currentGame.hacker.x));
        fire.play();
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

function startGame() {

    document.getElementById('game-board').style.display = 'block';
    document.getElementById('intro').style.display = 'none'
    //Instantiate a new game
    currentGame = new Game();
    //Instantiate a new hacker
    currentHacker = new Hacker();
    currentGame.hacker = currentHacker;
    currentGame.hacker.draw();
    currentFire = new Fire();
    currentGame.fire = currentFire;
    currentGame.fire.draw();
     checkBugs()
    song.play();
    cancelAnimationFrame(animationId);//cancel any animation
    //that might exit from the previous game
    updateCanvas();
}

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

function updateCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    currentGame.hacker.draw();

    bugsFrequency++;
    console.log(bugsFrequency)
    if (bugsFrequency < 500 && bugsFrequency % 100 === 1 ||
         bugsFrequency > 500 && bugsFrequency % 80 === 0) {
        const randomBugsX = Math.floor(Math.random() * 895);
        const randomBugY = 0;
        //  const randomBugWidth = 100; //Math.floor(Math.random() * 50) + 20;
        //  const randomBugHeight = 100; //Math.floor(Math.random() * 50) + 20;
        const newBug = new Bug(
            randomBugX,
            randomBugY
        );
        currentGame.bugs.push(newBug);
    }

    currentGame.bugs.forEach((bug, index) => {
        /*
        if(bugsFrequency > 500) {
            bug.y += 3; 
        }
        */
        bug.y += 1;
        bug.draw();

        currentGame.fires.forEach((fire, i) => {
            if (detectCollisionFire(bug, fire)) {
                bug.blow = true
                burst.play();
                currentGame.fires.splice(i, 1)
                currentGame.score++;
                document.getElementById('score').innerHTML = currentGame.score;

            }
        })
        if (detectCollision(bug)) {
            // bug.blow = true;
            bug.blow = true
            burst.play();
            currentGame.score++;
            document.getElementById('score').innerHTML = currentGame.score;
            /*
              bugsFrequency = 0;
              
              document.getElementById('score').innerHTML = 0;
              currentGame.bugs = [];
              document.getElementById('game-board').style.display = 'none';
              */

        }


        if (bug.y > canvas.height) {
            currentGame.score--;
            document.getElementById('score').innerHTML = currentGame.score;
            currentGame.bugs.splice(index, 1);
            if (currentGame.score < -8) {
                alert('Game Over!Try Again...');
                song.pause();
                bugsFrequency = 0;
                currentGame.score = 0;
                document.getElementById('score').innerHTML = 0;
                currentGame.bugs = [];
                document.getElementById('game-board').style.display = 'none';



            }

        }
    });

    currentGame.fires.forEach((fire, index) => {
        fire.y -= 6;
        fire.draw();
        if (fire.y < 0) {
            currentGame.fires.splice(index, 1);
        }
    })




    animationId = requestAnimationFrame(updateCanvas);
    //Calling update canvas every 60fps
}
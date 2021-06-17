let clean = new Audio("./sound/explode.mp3");
//let game = new Audio("./audio/game.mp3")
let fire = new Audio("./sound/fire.mp3");
let song = new Audio("./sound/song.mp3");
let explode = new Audio("./sound/explode.mp3");
let fireworks = new Audio("../sound/fireworks.mp3")
let gameOver = new Audio("../sound/gamOVER.wav")
let play = function(){document.getElementById("audio").play()}

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

const button = document.getElementById("button");
const audio = document.getElementById("player");

button.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
    button.innerHTML = "Pause";
  } else {
    audio.pause();
    button.innerHTML = "Play";
  }
});
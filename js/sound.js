let clean = new Audio("./sound/explode.mp3");
//let game = new Audio("./audio/game.mp3")
let fire = new Audio("./sound/fire.mp3");
let song = new Audio("./sound/song.mp3");
let intro = new Audio(".sound/intro.mp3");
let explode = new Audio("./sound/explode.mp3");

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


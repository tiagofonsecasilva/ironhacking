//6 Construcrion the game

class Game {
    constructor() {
        this.hacker = {};
        this.bugs = [];
        this.obstacles = [];
        this.score = 0;
        this.obstaclesFrequency = 0;
        this.bugsFrequency = 0;
        this.animationID = null;
        this.gameOver = false;
    }
}
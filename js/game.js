//6 Construcrion the game

class Game {
    constructor() {
        this.hacker = {};
        this.bugs = [];
        this.fires = [];
        this.score = 6000;
        this.firesFrequency = 0;
        this.bugsFrequency = 0;
        this.animationID = null;
        this.gameOver = false;
    }
}
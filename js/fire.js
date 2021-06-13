// 5. constução de obstáculos

class Obstacle {
    constructor (x, y, width, height ) { //arguments because will keep changing
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        context.fillStyle = "orange";
        context.fillRect(this.x, this.y, this.width, this.height)
    }

    shootFire(key) { //4.3
        context.clearRect(this.x, this.y, this.width, this.heigth);
        switch(key) {
            case "ArrowLeft":
                if (this.x > 20) {
                    this.x -=10;
                }
                break;
            case "ArrowRight":
                if (this.x < 430) {
                    this.x += 10
                }
                break;
        } // initial process car get out of canvas so we will do if inside arrows
        }
}
// 5. constução de obstáculos

class Bug {
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
}
class Obstacle {
    constructor (x, y, width, height ) { 
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        context.fillStyle = "white";
        context.fillRect(this.x, this.y, this.width, this.height)
    }

    fireEvent(key) { 
        context.clearRect(this.x, this.y, this.width, this.heigth);
        switch(key) {
            case "ArrowUp":
                if (this.x > 0) {
                    this.x -=10;
                }
                break;
        }
        }


}
// 5. constução de obstáculos

class Fire {
    constructor (x) {
        this.x = x;
        this.y = 700;
        this.width = 5;
        this.height = 10;
    }

    draw() {
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height)
    }

    fireEvent(key) { 
        context.clearRect(this.x, this.y, this.width, this.heigth);
        if(key === "ArrowUp") {
            shootingEvent ();
        }
        }
}
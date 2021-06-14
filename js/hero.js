
class Hacker { 
    constructor () { 
        this.x = 220;
        this.y = 615;
        this.width = 85;
        this.heigth = 85;
    }

    draw() { 
        const image = new Image();
        image.src = './images/hacker.png'
        context.drawImage(image, this.x, this.y, this.width, this.heigth);
    }

    moveHacker(key) { 
    context.clearRect(this.x, this.y, this.width, this.heigth);
    switch(key) {
        case "ArrowLeft":
            if (this.x > 0) {
                this.x -=10;
            }
            break;
        case "ArrowRight":
            if (this.x < 939) {
                this.x += 10
            }
            break;
    }
    }
}
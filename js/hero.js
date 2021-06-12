
class Hacker { 
    constructor () { 
        this.x = 220;
        this.y = 650;
        this.width = 50;
        this.heigth = 50;
    }

    draw() { 
        const image = new Image();
        image.src = '../images/hacker.png'
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
            if (this.x < 974) {
                this.x += 10
            }
            break;
    }
    }
}
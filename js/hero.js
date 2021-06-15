
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

    moveHacker(keyCode) {
        context.clearRect(this.x, this.y, this.width, this.height);
        switch(keyCode) {
            case 37: 
                if (this.x > 10) {
                    this.x -= 10;
                }
            break;
            case 39: 
                if (this.x < 895) {
                    this.x += 10
                }
            break;
        }
    }
}

class Hacker { 
    constructor () { 
        this.x = 350;
        this.y =365;
        this.width = 55;
        this.heigth = 55;
        this.image = new Image();
    }

    draw() { 
        this.image.src = './images/hacker.png'
        context.drawImage(this.image, this.x, this.y, this.width, this.heigth);
    }

    moveHacker(keyCode) {
        context.clearRect(this.x, this.y, this.width, this.height);
        switch(keyCode) {
            case 37: 
                if (this.x > 10) {
                    this.x -= 20;
                }
            break;
            case 39: 
                if (this.x < 845) {
                    this.x += 20;
                }
            break;
        }
    }
}
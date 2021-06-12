
class Hacker { //4.1
    constructor () { 
        this.x = 220;
        this.y = 650;
        this.width = 50;
        this.heigth = 50;
    }

    draw() { //4.2
        const image = new Image(); // car image
        image.src = '../images/hacker.png'
        context.drawImage(image, this.x, this.y, this.width, this.heigth);
    }

    moveHacker(key) { //4.3
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
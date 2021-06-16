// 5. constução de obstáculos

class Fire {
    constructor (x) {
        this.x = x;
        this.y = 615;
        this.width = 15;
        this.heigth = 15;
    }

    draw() { 
        const image = new Image();
        image.src = './images/cromada.png'
        context.drawImage(image, this.x, this.y, this.width, this.heigth);
    }
}
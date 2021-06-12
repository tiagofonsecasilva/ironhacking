// 5. constução de obstáculos

class Bug {
   constructor (x, y) { 
        this.x = x;
        this.y = y;
        this.width = 50;
        this.heigth = 50;
    }

    

    draw() { 
        const image = new Image();
        image.src = '../images/1x/Asset-3bug.png';
        context.drawImage(image, this.x, this.y, this.width, this.heigth);

    }
}
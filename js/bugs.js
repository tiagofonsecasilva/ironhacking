// 5. constução de obstáculos

class Bug {
   constructor (x, y) { 
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.image = new Image();
    this.clean = false;
    }

    draw() {
        if(!this.clean) {
            this.image.src = './images/1x/Asset-3bug.png';
        } else {
            this.image.src = '../images/broom.png';
           
        }
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

}
// 5. constução de obstáculos

class Bug {
   constructor (x, y) { 
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.image = new Image();
    this.blow = false;
    }

    draw() {
        if(!this.blow) {
            this.image.src = './images/1x/Asset-3bug.png';
        } else {
            this.image.src = '../images/broom3-unscreen.gif';
           
        }
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

}
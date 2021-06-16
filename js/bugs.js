// 5. constução de obstáculos

class Bug {
   constructor (x, y) { 
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.image = new Image();
    this.blow = false;
    this.timetodisappear = 6;
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
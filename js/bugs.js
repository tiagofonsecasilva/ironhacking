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

    // draw() { 
    //     const imageArray = ['./images/1x/Asset-3bug.png', './images/1x/Asset-4bug.png', './images/1x/Asset-5bug.png'];
    //     this.image.src = imageArray[0]
    //     context.drawImage(this.image, this.x, this.y, this.width, this.heigth);
    // }

    draw() {
        if(!this.blow) {
            this.image.src = './images/1x/Asset-3bug.png';
        } else {
            this.image.src = './images/explosion.png';
           
        }
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

}
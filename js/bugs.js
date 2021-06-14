// 5. constução de obstáculos

class Bug {
   constructor (x, y) { 
        this.x = x;
        this.y = y;
        this.width = 50;
        this.heigth = 50;
    }

    

    draw() { 
        const imageArray = ['./images/1x/Asset-3bug.png', './images/1x/Asset-4bug.png', './images/1x/Asset-5bug.png'];
        imageArray.fillStyle = "white";
        const bugs = Math.floor(Math.random() * imageArray.length);

        const image = new Image();
        image.src = imageArray[1]
        context.drawImage(image, this.x, this.y, this.width, this.heigth);

    }
}
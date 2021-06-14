// 5. constução de obstáculos

class Bug {
   constructor (x, y) { 
        this.x = x;
        this.y = y;
        this.width = 50;
        this.heigth = 50;
    }

    

    draw() { 
/*         const imageArray = ['./images/1x/Asset-3bug.png', './images/1x/Asset-4bug.png', './images/1x/Asset-5bug.png'];
        const bugs = Math.floor(Math.random() * imageArray.length);

        const image = new Image();
        image.src = imageArray[0]
        context.drawImage(image, this.x, this.y, this.width, this.heigth); */
        const imageArray = ['./images/1x/Asset-3bug.png', './images/1x/Asset-4bug.png', './images/1x/Asset-5bug.png'];
        const imageArrayTemp = imageArray.slice(2); // clone of initial array
        const index = Math.floor(Math.random() * imageArrayTemp.length);
        const image = new Image();
        image.src = imageArrayTemp[index]; 
        context.drawImage(image, this.x, this.y, this.width, this.heigth);
        imageArrayTemp.splice(index, 1);
    }

}
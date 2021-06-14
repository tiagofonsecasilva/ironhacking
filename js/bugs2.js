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
 // seed new enemies
 if (tick % enemySeedFrameInterval === 0 && ship.active) {
     const enemy = new Enemy();
     enemies.push(enemy);
     console.log({enemySeedFrameInterval, speedMultiplier})
   }
 
 
 
 var bugs = 0;
 var bugs = Math.floor((Math.random() * 4) + 1);
 
 var imgArray = [ 'img/ei1.png' , 'img/ei2.png' , 'img/ei3.png', 'img/ei4.png' ];
 
 
     imgArray.length;
 
     var eiImg = imgArray[bugs - 1];
 
     console.log( eiImg );
 
     document.getElementsByTagName( 'img' )[0].src = eiImg;
     document.getElementsByTagName( 'img' )[0].addEventListener( "click", changeImage );
     var counter = bugs - 1;
 
     function changeImage()
     {
         //Load new image if this is not the last image
         if ( counter < imgArray.length - 1 )
         {
             document.getElementsByTagName( 'img' )[0].src = imgArray[ ++counter % imgArray.length];
         }
 
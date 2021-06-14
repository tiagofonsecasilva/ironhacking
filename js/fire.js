// 5. constução de obstáculos

class Obstacle {
    constructor (x, y, width, height ) { //arguments because will keep changing
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        context.fillStyle = "orange";
        context.fillRect(this.x, this.y, this.width, this.height)
    }

    shootFire(key) { //4.3
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
//shoot : function(){

    //if(counter-prev_counter>=1){
        //console.log("Shooting a bullet");

        //var b = new bullet(this.x + (this.w)/2, this.y,10);
       // this.bullets.push(b);
       // prev_counter = counter;

        //enemies.forEach(function(enemy){

        //if(isColliding(this.bullets[this.bullets.length()-1],enemy)){
        //if(isCollidingWithBullet(b,enemy)){
           // this.state = "inactive";
           // console.log("enemy died");
           // var index = enemies.indexOf(enemy);
            //enemies.splice(index,1);
           // 

        //});
//};

// Listener for events
function buttonGotPressed(e){
if(e.key==" "){
    Hacker.shoot();
}
if(e.key=="ArrowLeft"){
    Hacker.x = Hacker.x - Hacker.speed;
    if(Hacker.x<=0){
        Hacker.x= 0;
    }
}
if(e.key=="ArrowRight"){
    Hacker.x = Hacker.x + Hacker.speed;
    if(Hacker.x >= W-Hacker.w){
        Hacker.x = W-Hacker.w;
    }
}
}

document.addEventListener('keydown', buttonGotPressed);   // When spacebar is pressed, then the ship shoots the bullet

enemies = [];
var e = new enemy(10,20,5);
enemies.push(e);

}

// Class defined for a bullet
function bullet(x,y,speed){
this.x = x;
this.y = y;
this.w = 4;
this.h = 14;
this.state = "active"
this.speed = speed;

//this.draw = function(){

    //pen.drawImage(bulletImage,this.x,this.y,this.w,this.h);

}

//this.update = function(){
    //this.y -= this.speed;

    //if(this.y<=0){
     //   this.state = "inactive"
   // }
//}

//}

// create lasers, if shooting
if (ship.active && ship.shooting) {
    if (laserTick === 0 || laserTick % 10 === 0) {
      let laser = new Laser({
        color: 'skyblue',
        x: ship.x + ship.radius - 3
      });
      lasers.push(laser);
    }
 }
 
 drawShip(xPos);
 
 handleShipCollision();
 handleLaserCollision();
 
 drawLasers();
 drawEnemies();
 
 enemyCleanup();
 laserCleanup();
 
 if (ship.shooting) laserTick++;
 tick++;
}
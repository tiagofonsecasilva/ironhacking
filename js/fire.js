
    class bullet {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.w = 4;
        this.h = 14;
        this.state = "active";
        this.speed = speed;

        this.draw = function () {

            pen.drawImage(bulletImage, this.x, this.y, this.w, this.h);

        };

        this.update = function () {
            this.y -= this.speed;

            if (this.y <= 0) {
                this.state = "inactive";
            }
        };
        } 
        
    }

    if(counter-prev_counter>=1){
        console.log("Shooting a bullet");

        var b = new bullet(this.x + (this.w)/2, this.y,10);
        this.bullets.push(b);
        prev_counter = counter;

        enemies.forEach(function(enemy){

        if(isColliding(this.bullets[this.bullets.length()-1],enemy)){
        if(isCollidingWithBullet(b,enemy)){
           this.state = "inactive";
           console.log("enemy died");
           var index = enemies.indexOf(enemy);
           enemies.splice(index,1);
            
    };
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


    document.addEventListener('keydown', buttonGotPressed);   // When spacebar is pressed, then the ship shoots the bullet

    enemies = [];
    var e = new enemy(10,20,5);
    enemies.push(e);

        
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

        if (ship.shooting)
            laserTick++;
        tick++;
        

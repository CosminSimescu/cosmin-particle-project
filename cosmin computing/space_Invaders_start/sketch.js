//introducing the variables and assigning them values instead of hard coding values in each line

let screenWidth = 500;
let screenHeight = 500;
//this creates an array called aliens
let aliens = [];
let alienWidth = 20;
let alienHeight = 20;
let alienVelocity = 0.5;
let numCols = 12;
let numRows = 7;
let hSpace = 30;
let vSpace = 30;
//the offset below decides where to put the objects on screen,default starts on 0,0 the offset makes it centered.
let xOffset = (screenWidth - (numCols - 1) * hSpace) / 2;
let yOffset = 20;
let shiftDown = 40;
let alienImg;

let shooterWidth = 100;
let shooterHeight = 20;
let shooter;

let bullets = [];
let bulletWidth = 10;
let bulletHeight = 10;
let bulletVelocity = 5;

let emitters = [];

function preload() {
    alienImg = loadImage('assets/spaceInvaders.png');
}

function setup() {
    populateAliens();
    //the parameters for making the shooter object show up 
    shooter = new Shooter(screenWidth / 2, screenHeight - shooterHeight / 2);
    createCanvas(screenWidth, screenHeight);
    background(255);
}

function draw() {
    background(0);
    shooter.render();
    shooter.move();
    let shift = false;
    aliens.forEach(alien => {
        alien.move();
        alien.render();
        alien.pos.x >= screenWidth ? shift = true : null;
        alien.pos.x <= 0 ? shift = true : null;
    });
    if (shift) {
        aliens.forEach(alien => {
            alien.shift();
        })
    }
    for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].move();
        bullets[i].render();
        for (let j = aliens.length - 1; j >= 0; j--) {
            if (bullets[i].hits(aliens[j])) {
                aliens.splice(j,1);
                bullets.splice(i,1);
                break
            }
        }
    }
    checkGameStatus()
}
function checkGameStatus(){
    let gameOver=false;
    aliens.forEach(alien => {
        if(alien.pos.y>400){
            gameOver=true;
        }
    });
    if (gameOver){
        noLoop();
        textSize(120);
        background(255,0,0);
        fill(0,200,0);
        textAlign(CENTER,CENTER)
        text("Game\nOver",250,200)
    }

}

//depending on which key is pressed the 'shooter' will either be moved positively-right or negatively-left
function keyPressed() {
    if (keyCode === 32) {
        bullets.push(new Bullet(shooter.pos.x, screenHeight - shooterHeight,shooter.barrelAngle))
    }
    if (keyCode === RIGHT_ARROW) {
        shooter.barrelAngle+=0.2;
    } else if (keyCode === LEFT_ARROW) {
        shooter.barrelAngle-=0.2;
    }
}


function populateAliens() {
    //the row loop goes down and the col loop goes left 
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            //the line below creates a new alien each time it is run then pushing it into the array
            aliens.push(new Alien(col * hSpace + xOffset, row * vSpace + yOffset))
        }
    }
}
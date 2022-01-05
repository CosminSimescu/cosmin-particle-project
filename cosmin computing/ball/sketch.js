let myBall;

function setup() {

    createCanvas(500,500);
    angleMode (DEGREES);
    myBall = new Ball(0,0,0,0,20,255);
    myBall.vx = 4*cos(25);
    myBall.vy = 4*sin(25);
    myBallTwo = new Ball(0,250,0,0,20,0);
    myBallTwo.vx = 4*cos(70);
    myBallTwo.vy = 4*sin(70);
  }

  

function draw() {

    background(50,200,100);
    
  
    if (myBall.x > 500){myBall.vx=-myBallTwo.vx}
    if (myBall.x < 0){myBall.vx=-myBallTwo.vx}
    if (myBall.y > 500){myBall.vy =-myBallTwo.vy}
    if (myBall.y < 0){myBall.vy =-myBallTwo.vy}
    if (myBallTwo.x > 500){myBallTwo.vx =-myBallTwo.vx}
    if (myBallTwo.x < 0){myBallTwo.vx =-myBallTwo.vx}
    if (myBallTwo.y > 500){myBallTwo.vy =-myBallTwo.vy}
    if (myBallTwo.y < 0){myBallTwo.vy =-myBallTwo.vy}
    noStroke;
    myBall.drawBall();
    myBall.moveBall();
    myBallTwo.drawBall();
    myBallTwo.moveBall();
  }
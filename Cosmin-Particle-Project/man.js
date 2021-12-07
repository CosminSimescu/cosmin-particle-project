let droplets= 200;

// follow mouse javascript
//https://levelup.gitconnected.com/use-javascript-to-make-an-element-follow-the-cursor-3872307778b4

var drop = []

function setup() {
  createCanvas(1000, 1000);
  for(var i = 0; i < droplets; i++) {
    drop[i] = new Drop();
    document.addEventListener('mousemove', function(e) {
        
    });
}
}

function draw() {
  background(0);
  for(var i = 0; i < droplets; i++) {
  drop[i].show();
  drop[i].update();
  //head
  ellipse (mouseX,mouseY,50,50);
  //eyes
  point (mouseX-10,mouseY);
  point (mouseX+10,mouseY);
  rect (mouseX-25,mouseY+25,50,100);
  //hands
      rect (mouseX-35,mouseY+25,10,50);
      rect (mouseX+25,mouseY+25,10,50);
  //legs
  rect (mouseX+15,mouseY+125,10,60);
  rect (mouseX-25,mouseY+125,10,60);
  //umbrella
  //translate(width / 2, height / 2);
  angleMode(DEGREES);
  arc(mouseX-50,mouseY-30, 220, 180,180,360);
  rect (mouseX-50,mouseY-30,10,100);
  rect(mouseX-40,mouseY+60,15,10)
}
}

function Drop() {
  this.x = random(0, width);
  this.y = random(0, -height);
  
  this.show = function() {
    //noStroke();
    fill(255);
    ellipse(this.x, this.y, random(1, 5), random(1, 5));   
  }
  this.update = function() {
    this.speed = random(5, 10);
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity;  
    
    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
}
}
}
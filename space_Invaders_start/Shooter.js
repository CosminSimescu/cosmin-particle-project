class Shooter {
    constructor(x, y) {
        //the line above and the line below decide where the ellipse is drawn on the screen
        this.pos = createVector(x, y);
        this.direction = 1;
        this.barrelAngle = 0

    }
    render() {
        push()
        translate(this.pos.x, this.pos.y);
        fill(255, 0, 0);
        rectMode(CENTER)
        rect(0, 0, shooterWidth, shooterHeight)

        rotate(this.barrelAngle)
        rectMode(CORNER);
        fill(0,255,0);
        noStroke();
        rect(-5,5,40,10)
        pop()
    }
    move() {
        //everytime this.pos.x is less than zero the shooter will change direction back into view same with if the shooter exceeds 500px from the grid
        if(this.pos.x<0|| this.pos.x>500){
            this.direction*= -1
        }
        //everytime 'move' is called the objects move by 1pixel
        this.pos.x += this.direction;
    }
    
    setDirection(direction){
        this.direction = direction
    }
}
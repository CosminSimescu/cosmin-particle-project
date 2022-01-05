class Alien{
    constructor(x,y){
        //the line above and the line below decide where the ellipse is drawn on the screen
this.pos = createVector(x,y);
this.velocity = alienVelocity;

    }
    render(){
        push()
        translate(this.pos.x,this.pos.y);
        image(alienImg,-alienWidth/2,-alienHeight/2,alienWidth,alienHeight)
        //fill(255,0,0);
        //ellipse(0,0,alienWidth,alienHeight)
        pop()
    }
    move(){
        //everytime 'move' is called the objects move by 1pixel
        this.pos.x += this.velocity
    }
    shift(){
        this.pos.y += shiftDown; 
        this.velocity *= -1;
    }
}
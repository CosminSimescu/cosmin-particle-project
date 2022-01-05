class Bullet{
    constructor(x,y,a){
        //the line above and the line below decide where the ellipse is drawn on the screen
this.pos = createVector(x,y);
// this.velocity = bulletVelocity;
this.angle=a;

    }
    render(){
        push()
        translate(this.pos.x,this.pos.y);
        fill(255,255,0);
        ellipse(0,0,bulletWidth,bulletHeight)
        pop()
    }
    move(){
        //everytime 'move' is called the objects move in the designated direction
        // this.pos.y -= this.velocity;
        this.pos.x+=Math.cos(this.angle)*bulletVelocity;
        this.pos.y+=Math.sin(this.angle)*bulletVelocity;
    }
    hits(alien){
        let distance = (p5.Vector.sub(this.pos, alien.pos)).mag();
        if (distance< bulletHeight/2 + alienHeight/2){
            return true;
        }else {
            return false;
        }
    }
}
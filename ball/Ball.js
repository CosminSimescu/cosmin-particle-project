class Ball {
	constructor(x, y, vx, vy, radius, c) {
		//properties
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.radius = radius;
		this.c = c;
		//this.rotation = 0;
	
    }
   //function to draw the ball
    drawBall() {
		//translate(this.x, this.y);
		//rotate(this.rotation);
		fill(this.c);
		ellipse(this.x, this.y, this.radius*2, this.radius*2);
		
	} 
	//function to move the ball
	moveBall() {
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}
}

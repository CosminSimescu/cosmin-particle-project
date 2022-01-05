//shapes which make the umbrella man

    function draw(){
    {
    ellipse (250,285,50,50);
    point (245,290,2,2);
    point (255,290,2,2);
//torso
    rect (225,310,50,100);
//hands
    rect (215,320,10,50);
    rect (275,265,10,50);
//legs
rect (230,410,10,60);
rect (260,410,10,60);
//umbrella
rect (270,225,10,40);
rect (275,260,15,10);
translate(width / 2, height / 2);
angleMode(DEGREES);
rotate();
arc(20,-25, 220,180,180,360);
rect (400,275,10,100);
rect (250,250,15,10);
    }
}


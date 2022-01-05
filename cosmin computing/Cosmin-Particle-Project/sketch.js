let droplets = [];
let howManyold
let numOfdroplets = 50;

let params = {
    howMany: 15,
    howManyMin: 2,
    howManyMax: 100,

    speedX: 0,
    speedXMin: -25,
    speedXMax: 25,

    speedY: 5,
    speedYMin: -24,
    speedYMax: 24,

    radius: 10,
    radiusMin: 0,
    radiusMax: 50,

    height: 50,
    heightMin: 10,
    heightMax: 150
}

var bgColor = [255, 255, 255];

let visible = true;
var gui;



function populateArray(r, xSp, ySp) {
    for (i = 0; i < params.howMany; i++) {
        droplets.push(new rain(r, xSp, ySp));
    }
    return console.log("population complete", )
}
// So now after all of our data has been created we will use p5.js
// to draw circles. We iterate through the array and draw a circle with
// the data in each object

function setup() {
    createCanvas(500, 500);
    background(bgColor);

    //populate the Array
    populateArray(params.radius, params.speedX, params.speedY);
    // create the GUI
    gui = createGui('Change droplets');
    gui.addObject(params);
    gui.addGlobals('bgColor');
    //noLoop();
    //create body of stick figure


}

function draw() {
    clear();
    background(bgColor);


    if (howManyold != params.howMany) {
        droplets = [];
        //populate the Array
        populateArray(params.radius, params.speedX, params.speedY);
    }

    // Using an Array For Each method with an arrow function but
    // this time we call the function on the object
    q = new rain(params.radius, params.speedX, 0);
    droplets.forEach(rain => {
        //update Values from the GUI

        rain.updateVals(params.speedX, params.speedY, params.radius)
        rain.move();
        rain.render();
        //if the molecule hit the umbrella then send it back to Y 0 which is at the top of the screen
        if (collision(rain)) {
        
        rain.posY=0;
        }

    });
    //check if number of rain-particles has changed
    howManyold = params.howMany;
    fill(0, 200, 150)
    ellipse(250, 285, 50, 50);
    //eyes of the man holding the umbrella
    point(245, 290, 2, 2);
    point(255, 290, 2, 2);
    //co-ordinates for umbrella arc ends
    point(380, 226, 2, 2);
    point(160, 226, 2, 2);
    //torso
    rect(225, 310, 50, 100);
    //hands
    rect(215, 320, 10, 50);
    rect(275, 265, 10, 50);
    //legs
    rect(230, 410, 10, 60);
    rect(260, 410, 10, 60);
    //umbrella
    rect(270, 225, 10, 40);
    rect(275, 260, 15, 10);
    //translations into degrees so i can use degrees in making an arc as the umbrella head
    translate(width / 2, height / 2);
    angleMode(DEGREES);
    rotate();
    arc(20, -25, 220, 180, 180, 360);
    rect(400, 275, 10, 100);
    rect(250, 250, 15, 10);
}
//the collision function returns true if it touches the umbrella or false if it doesnt
function collision(rain) {
    if (rain.posX < 380 && rain.posX > 160 && rain.posY < 225 && rain.posY > 180) {
        return true;
    }
    return false;
}

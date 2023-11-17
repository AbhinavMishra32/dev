let circleX = 10;
let r, g, b;


// let circleSize = Math.random()*100
function setup() {
	createCanvas(windowWidth, windowHeight);
    newCanvas = createCanvas(windowWidth, windowHeight);
	background(0);
    x = windowWidth/2;
    y = windowHeight/2;
}

function draw() {
    r = random(255);
    g = random(255);
    b = random(255);
    let speed = 100;
    if(x > windowWidth ||x > windowHeight || y >windowHeight || y > windowWidth){
        x = windowWidth/2;
        y = windowHeight/2;
    }
    else{
        x+=random(-speed, speed);
        y+=random(-speed, speed);
    }   

    let circleSize = random(20);
    fill(r, g, b);
    circle(x, y, circleSize);

    if(mouseIsPressed){

    }
}

function keyPressed(){
}

function mousePressed(){
    stop();
}


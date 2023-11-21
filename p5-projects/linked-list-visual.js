let ball;
function setup(){
    createCanvas(400, 400);
    ball = new Ball(200, 200, 10);

}

function draw(){
    background(30);
    ball.show();
    ball.update();
    // if(keyPressed === true){
    //     ball.applyForce([0, 0.1]);
    // }

}

function keyPressed(){
    if(keyCode === UP_ARROW){
        ball.applyForce([0, -0.1]);
    }
    if(keyCode === DOWN_ARROW){
        ball.applyForce([0, 0.1]);
    }
    if(keyCode === LEFT_ARROW){
        ball.applyForce([-0.1, 0]);
    }
    if(keyCode === RIGHT_ARROW){
        ball.applyForce([0.1, 0]);
    }

}

const G = 6.67408e-11;
const accEarth = 9.8;

class Ball{
    constructor(x, y, mass){
        
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = mass;
    }

    update(){
        this.pos.add(this.vel);
        this.vel.add(this.acc);
    }

    show(){
        noStroke();
        fill(255);
        circle(this.pos.x, this.pos.y, 32);
    }

    applyForce(force){
        this.acc.add(force);
    }
}
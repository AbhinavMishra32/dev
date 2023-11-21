function setup(){
    createCanvas(400, 400);

}

function draw(){
    background(30);
}



class Ball{
    constructor(x, y){
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
    }

    update(){
        g = 
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.
    }

    show(){
        noStroke();
        fill(255);
        circle(this.pos.x, this.pos.y, 32);
    }

    applyForce(force){
        this.vel.add(force);
    }
}
function setup() {
    createCanvas(400, 400);

    mover = new Mover(200, 200);
}

function draw() {
    background(30);
    mover.update();
    mover.show();

}


class Mover {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(3));

    }

    update() {
        let mouse = createVector(mouseX, mouseY);
        this.acc = p5.Vector.sub(mouse, this.pos);
        this.acc.setMag(0.1);

        this.vel.add(this.acc);

        this.pos.add(this.vel);
    }

    show() {
        noStroke();
        fill(255);
        circle(this.pos.x, this.pos.y, 32);
    }
}
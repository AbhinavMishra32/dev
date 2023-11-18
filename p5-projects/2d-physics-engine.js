function setup(){
    createCanvas(windowWidth, windowHeight);
    //initializing the shapes...
    phyRect = new Rectangle(rect_x, windowHeight-rect_y, rectWidth, rectHeight, rect_velocity);
    phyCirc = new Circle(circle_x, windowHeight-circle_radius, circle_radius*2, circle_velocity);
    
}

let rect_x = 100;
let rect_y = 50;
let rectWidth = 70;
let rectHeight = 50;

let circle_x = 40;
let circle_radius = 20;

let rect_velocity = -0.25;
let circle_velocity = 1;

function draw(){
    background(30);
    //moving the shapes..
    phyRect.draw();
    phyRect.move();
    phyCirc.draw();
    phyCirc.move();

    console.log(distanceFind(phyCirc, phyRect));
    console.log(checkCollision(phyCirc, phyRect));
    
}
class Rectangle{
    constructor(x, y, width, height, velocity, mass){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.mass = mass; 
        this.velocity = velocity;
        this.center = {x: this.x + this.width/2, y: this.y + this.height/2};
    }

    move(){
        this.x = this.x + this.velocity;
        this.center.x = this.x + this.width/2;
    }

    draw(){
        rect(this.x, this.y, this.width, this.height, 8, 8, 8);
    }
}

class Circle{
    constructor(x, y, diameter, velocity){
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.velocity = velocity;
        this.center = {x: this.x + this.diameter/2, y: this.y + this.diameter/2};
    }
    move(){
        this.x = this.x+this.velocity;
        this.center.x = this.x + this.diameter/2;
    }

    draw(){
        circle(this.x, this.y, this.diameter);
    }
}

function distanceFind(circle, rect){
    x1 = circle.center.x;
    y1 = circle.center.y;
    x2 = rect.center.x;
    y2 = rect.center.y;
    
    let distance = Math.sqrt(((x1-x2)**2 + (y1-y2)**2));
    return distance;
    
}

function checkCollision(circle, rect){
    if(distanceFind(circle, rect) >= circle.diameter/2 + rect.width/2){
        
        return false;
    }
    else{
        // stop();
        return true;
    }
}
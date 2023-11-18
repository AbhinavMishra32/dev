function setup(){
    createCanvas(windowWidth, windowHeight);
    
}

let rect_x = 100;
let rect_y = 50;
let rectWidth = 70;
let rectHeight = 50;

let circle_x = 40;
let circle_radius = 20;
function draw(){
    background(30);
    //initializing the shapes...
    phyRect = new Rectangle(rect_x, windowHeight-rect_y, rectWidth, rectHeight);
    phyCirc = new Circle(circle_x, windowHeight-circle_radius, circle_radius*2) ;
    phyRect.draw();
    phyCirc.draw();
    phyCirc.x = phyCirc +1;
    

    
    
}
// for(let i = 0 ; i< 200; i++){
//     phyRect.x = phyRect.x +1;   
//     console.log('is happening');
// }
// setTimeout(noLoop(), 6000);

class Rectangle{
    constructor(x, y, width, height, mass){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.mass = mass; 
    }

    draw(){
        rect(this.x, this.y, this.width, this.height, 8, 8, 8);
    }
}

class Circle{
    constructor(x, y, diameter){
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        //default velocity
        this.velocity = 0;
    }

    draw(){
        circle(this.x, this.y, this.diameter);
    }
}


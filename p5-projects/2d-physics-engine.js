function setup(){
    createCanvas(windowWidth, windowHeight);
    background(100);
}

function draw(){
    rectangle = new Rectangle(50, 50, 50, 50);

    rectangle.draw();
}



class Rectangle{
    constructor(x, y, width, height, mass, velocity){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.mass = mass;
        this.velocity = velocity; 
    }

    draw(){
        rect(this.x, this.y, this.width, this.height, 8, 8, 8)
    }
}
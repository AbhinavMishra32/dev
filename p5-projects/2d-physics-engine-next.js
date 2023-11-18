function setup(){
    createCanvas(windowWidth, windowHeight);
    print("hello")
}

let rect_x = 100;
let rect_y = 50;
let rectWidth = 70;
let rectHeight = 50;

let circle_x = 40;
let circle_radius = 20;

function draw(){
    
    background(100);
    rect(rect_x, windowHeight-rect_y, rectWidth, rectHeight, 8, 8, 8);
    circle(circle_x, windowHeight-circle_radius, circle_radius*2);  

    

}

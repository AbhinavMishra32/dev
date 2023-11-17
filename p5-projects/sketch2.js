function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(0);
    fill(255);
    //circle(mouseX, mouseY, 50);

    for(let i = 0; i < windowWidth; i++){
        let x = windowWidth/2;
        let y = windowHeight/2;
        //noStroke();
        circle(x, y, windowWidth);
    }
}


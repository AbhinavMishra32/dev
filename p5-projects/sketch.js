function setup() {
	createCanvas(400, 400);
	// background(0);
}

function draw() {
    background(0)
    fill(mouseX)
    circle(mouseX, mouseY, 50)
}

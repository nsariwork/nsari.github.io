function setup() {
  createCanvas(400, 400);
    background(220);
}

function draw() {
  triangle(mouseX, mouseY, width/2, height/2, mouseX-50, mouseY-50);
}

function mousePressed(){
  background(255);
}

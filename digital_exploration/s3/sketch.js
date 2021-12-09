function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
 line(mouseX,mouseY,mouseX + random(-50,50), mouseY + random(-50,50));
}

function mousePressed(){
  background(255);
}

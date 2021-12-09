let mic;
let x = 1;
let speed = 1;

function setup() {
  createCanvas(400, 400);
  background(255);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  mic.start();
}

function draw() {


  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 0.25, height, 0);
  ellipse(x, h, 1, 1);
  x = x + speed;
  if (x>=width || x < 0){
    speed = speed * -1
}
}

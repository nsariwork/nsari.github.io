let img;
let extraCanvas;

//load kermit picture
function preload(){
  img = loadImage('kermit1.png');
  
}

function setup() {
  createCanvas(400, 400);
  
  //create extra canvas that will hide the trails of the image with and making it invisible with .clear so you can still see cursor of kermit
  extraCanvas = createGraphics(400,400);
  extraCanvas.clear();
  background(255);
}

function draw() {
  background(255);

//this draws the stamp of kermit on invisible canvas
  if (mouseIsPressed){
    extraCanvas.imageMode(CENTER);
    extraCanvas.image(img, mouseX, mouseY,100,50);
  }
  
//this is extra canvas to hide trails of kermit cursor  
  imageMode(CORNER);
  image(extraCanvas,0,0);

//this is kermit cursor
  imageMode(CENTER);
  image(img, mouseX, mouseY, 100,50);
  
}
let num = 10;
let cells = [];

let previousTime = 0; 

let multiplying = false;

function setup(){
  
  createCanvas(windowWidth, windowHeight); 
  
  for(let i=0; i<num; i++){
    cells[i] = new Cells();
  }
  
}

function draw(){
  
  background(255);
  
  let currentTime = millis();  
  
  //squiggly bubbles
  for (let i=0; i<cells.length; i++){
  cells[i].display();
  cells[i].wiggle();
  }
  
  
  //everytime it gets closer generate another
  for (let c1 of cells){
    for (let c2 of cells){
      let d = dist(c1.x, c1.y, c2.x, c2.y);
      if (d < 50 && d > 0){
        multiplying = true;
        line(c1.x, c1.y, c2.x, c2.y);
        if (currentTime - previousTime >= 1000){
          previousTime = currentTime;
          let nc = new Cells();
          cells.push(nc);
        }
      } else {
        multiplying = false;
      }
    }
  }

  
  //text indicator
  text("number of cells:", 30, height-45);
  text(cells.length, 120, height-45);
  text("currently multiplying:", 30, height-30);
  text(multiplying, 145, height-30);
  
}
    
class Cells {
  
  constructor(x,y,r){
    this.x = random(50, width);
    this.y = random(50, height);
    this.r = random(20,30);
  }
  
  display(){
    fill(this.x%255,255,0,30);
    stroke(255,0,0);
    strokeWeight(1);
    ellipse(this.x, this.y, this.r);
  }
  
  wiggle(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }
  
  born(){
     let nc = new Cells();
     cells.push(nc);
  }
  
}

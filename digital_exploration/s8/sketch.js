let num = 20;
let points = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i<num; i++){
    points[i] = new Points();
  }
}

function mousePressed(){
  background(0);
  for(let i=0; i<num; i++){
    points[i] = new Points();
  }
}


function draw(){
  background(0);
  for (let i=0; i<points.length; i++){
  points[i].display();
  }
  
  for (let a of points){
     for (let b of points){
      strokeWeight(0.25);
      stroke(200,255,200,50);
      line(a.x, a.y, b.x, b.y);
     }
   }
      
}
    
class Points {
  
  constructor(x,y,r){
    this.x = random(50, width-50);
    this.y = random(50, height-50);
    this.r = 10;
  }
  
  display(){
    for (let i = 0; i<points.length; i++){
    let p = points[i];
    fill(0,150,255);
    stroke(0,0,255);
    strokeWeight(1);
    ellipse(p.x, p.y, p.r);
    }
  }
  
  
}
var bullet,wall;
var speed, weight;
var thickness;


function setup() {
  createCanvas(1600, 400);

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(23,83)

  bullet=createSprite(50, 200, 50,6); 
  bullet.velocityX=speed;
  bullet.shapeColor=color("white");

  wall=createSprite(1200,200, thickness, height/2);
  wall.shapeColor=color(80,80,80)
  

}

function draw() {

  background(0);  

  if(wall.x-bullet.x < (bullet.width+wall.width)/2){

    bullet.velocityX=0;


    var damage= 0.5 * weight * speed * speed / thickness*thickness*thickness;

    if(damage<80000000) { 
      bullet.shapeColor=color(0, 255, 64); }
    
    if(damage>80000000) { 
      bullet.shapeColor=color("red"); }
  }

  drawSprites();
 }

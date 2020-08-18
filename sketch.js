var car,wall,speed,weight,deformation;
function setup() {
  createCanvas(1600,400);
 car = createSprite(0, 200, 30, 20); 
 wall = createSprite(1000,200,30,200);
 speed=random(55,90);
 weight=random(400,1500); 
 car.velocityX = speed;
 wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0); 
  deformation=0.5*weight*speed*speed/22500
  if (wall.x-car.x < (car.width+wall.width)/2) 
  {
    car.velocityX=0;
    if(deformation<100)
    {
      car.shapeColor = color(0,255,0);
    }
    else if (deformation>100 && deformation>180)
    {
      car.shapeColor = color(230,230,0);
    }
    else if (deformation<180)
    {
      car.shapeColor = color(255,0,0);
    } 
  } 
  drawSprites();
}
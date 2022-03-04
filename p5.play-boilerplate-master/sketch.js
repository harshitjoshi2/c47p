var backgroundImg;
var spaceship,spaceshipImg;
var asteriod,asteriodImg;
var asteriodGroup;
var score=0;
var laser,laserImg,laserGroup;

function preload(){
  backgroundImg=loadImage("background.jpg")
  spaceshipImg=loadImage("spaceship.png");
  asteriodImg=loadImage("asteriod.png");
  laserImg=loadImage("laser.png");
}


function setup() {
  createCanvas(windowWidth-100,windowHeight-100);
  spaceship=createSprite(400, 450, 50, 50);
  spaceship.addImage(spaceshipImg);
  spaceship.scale=0.3;
 asteriodGroup=new Group();
 laserGroup=new Group();

    
      
      
    
}

function draw() {
  background(backgroundImg);  
textSize(35);
  text("Score:"+score,50,50);
  
  
if(keyDown("RIGHT_ARROW")){
  spaceship.x+=5
}
if(keyDown("LEFT_ARROW")){
  spaceship.x-=5
}

if(spaceship.x<0){
  spaceship.x=10;
}
if(spaceship.x>windowWidth-100){
  spaceship.x=windowWidth-150;
}

if(spaceship.isTouching(asteriodGroup)){
  asteriodGroup.destroyEach();
  spaceship.destroy();
 }

 if(keyDown("space")){
  createlaser();
}

 if(laserGroup.isTouching(asteriodGroup)){
  laserGroup.destroyEach();
  asteriodGroup.destroyEach();
  score+=50;

  }

  

  if(score>=300&&score<=310){
    text("Good Job !",width/2,height/2);
     }
     if(score>=500&&score<=510){
      text("Doing Great !",width/2,height/2);
       }
    
       if(score>=1000&&score<=1010){
        text("excellent !",width/2,height/2);
         }

  spawnAsteriod();
  drawSprites();
}
function spawnAsteriod(){
  if(frameCount%250===0){
    asteriod=createSprite(10,10,50,100);
    asteriod.x=Math.round(random(100,width-50));
    asteriod.scale=0.2
    asteriod.addImage(asteriodImg);
    asteriodGroup.add(asteriod);
    asteriod.velocityY=2;
  }
}

function createlaser(){
  laser=createSprite(spaceship.x,spaceship.y-50,50,50);
  laser.scale=0.1;
 laser.addImage(laserImg);
  laser.velocityY=-4;
  laserGroup.add(laser);
}

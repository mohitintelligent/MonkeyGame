  var monkey , monkey_running;

  var banana ,bananaImage, obstacle, obstacleImage;

  var FoodGroup, obstacleGroup;

  var ground,invisible_Ground;

  var score=0;

  var gamestate=1;

  var play=1;

  var end=0;

  var survivalTime;

function preload(){
  
  
    monkey_running =                               loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas (600,600);
  
  monkey=createSprite(50,350,20,20);
  
  monkey.addAnimation("monkeyan",monkey_running); 
  
  monkey.scale=0.1; 
  
  FoodGroup = new Group(); 
  
  obstacleGroup = new Group(); 
  
  ground=createSprite(600,350,1200,10) ;
  
      if (ground.y===0){
          ground.x=ground.width/2 
          ground.velocityX=-8; 
  
         }
}

 
function draw() {
  background("pink");
  
  survivalTime=Math.ceil(frameCount/frameRate());  
   
  foodformonkey();
  obstical();
  
  if (keyDown("space")&&monkey.y >= 310){
    monkey.velocityY=-12;
    
  }
  
  if (monkey.isTouching(FoodGroup)){
    score=score+1;
    FoodGroup.destroyEach();
  }
  
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
  monkey.setCollider("rectangle",0,0,410,600)
  
  drawSprites();
  
  textSize(20);
  fill("white")
  text("score:"+score,450,35);
  
  fill("black") ;
  text ("survival Time:"+survivalTime,200,35) ;
    
}

function foodformonkey(){
  if(frameCount%80===0){
    
  var randyposfobanana;
  randyposfobanana=Math.round(random(120,200));
    
  banana=createSprite(600,100,20,20);
    
  banana.addImage("banaani",bananaImage);
    
  banana.scale=0.1;
    
  banana.velocityX=-8;  
    
  banana.y=randyposfobanana;
    
  banana.lifetime=70;
    
  FoodGroup.add(banana);  
    
  }
  
}

function obstical(){
  
  if(frameCount%300===0){
    
  obstacle=createSprite(600,330,100,100);
    
  obstacle.addAnimation("obsani",obstaceImage);
    
  obstacle.scale=0.1;
  
  obstacle.velocityX=-8;
  
  obstacle.lifetime=70; 
  
  obstacleGroup.add(obstacle);  
    
  }
  
}





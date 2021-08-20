var astronaut;

function preload(){
bg = loadImage("./images/iss.png");
bath = loadAnimation("./images/bath1.png","./images/bath2.png");
brush = loadImage("./images/brush.png");
drink = loadAnimation("./images/drink1.png","./images/drink2.png");
eat = loadAnimation("./images/eat1.png","./images/eat2.png");
gym = loadAnimation("./images/gym1.png","./images/gym2.png","./images/gym11.png","./images/gym12.png");
move = loadAnimation("./images/move.png","./images/move1.png");
sleep = loadAnimation("./images/sleep.png");
}


function setup() {
  createCanvas(700, 500);

  astronaut = createSprite(340,250);
  astronaut.addImage("iss",bg);
  astronaut.scale = 0.15;
  
  astronaut = createSprite(350,340);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;

  
  
}

function draw() {
  background(0);

  if(keyDown("up_arrow")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 340;
    astronaut.x = 360;
  
    //astronaut.velocityX = 0;
    //astronaut.velocityY = 0;
  }

  if(keyDown("down_arrow")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.scale = 0.1;

  
    //astronaut.velocityX = 0;
      //astronaut.velocityY = 0;
  }

  if(keyDown("left_arrow")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
   

  
    //astronaut.velocityX = -0.10;
    //astronaut.velocityY = -0.10;
  }

  if(keyDown("right_arrow")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
   

  
    //astronaut.velocityX = -0.10;
    //astronaut.velocityY = -0.10;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    //astronaut.scale = 3;
  
    //astronaut.velocityX = -0.10;
    //astronaut.velocityY = -0.10;
  }


  drawSprites();
}


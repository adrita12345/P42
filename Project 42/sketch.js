var iss, spacecraft;
var hasDocked=false;

function preload(){
  issImage = loadImage("Sprites/iss.png");
  rr = loadImage("Sprites/spacecraft4.png");
  rs = loadImage("Sprites/spacecraft3.png");
  ru = loadImage("Sprites/spacecraft2.png");
  bgImage = loadImage("Sprites/spacebg.jpg");
  rocketImg = loadImage("Sprites/spacecraft1.png")
}

function setup() {
  createCanvas(1300,800);

  ib = createSprite(330, 300, 10, 20);
  
  iss = createSprite(400, 300, 50, 50);
  iss.addImage(issImage);

  spaceship = createSprite(1180, 700, 50, 50);
  
  spaceship.addImage(rocketImg);
  spaceship.scale = 0.3;
 
}
function draw() {
  background(bgImage); 
  
  if(!hasDocked){
   
    if(keyDown(LEFT_ARROW)){
      spaceship.x = spaceship.x-10;
      spaceship.addImage(rs);
    }

    if(keyDown(RIGHT_ARROW)){
      spaceship.x = spaceship.x+10;
      spaceship.addImage(rr);
    }

    if(keyDown(UP_ARROW)){
      spaceship.y = spaceship.y-10;
      spaceship.addImage(ru);
    }

    if(keyDown(DOWN_ARROW)){
      spaceship.y = spaceship.y+10;
      spaceship.addImage(rocketImg);
    }

    
  }

  if(spaceship.isTouching(ib)){
    hasDocked = true;
    spaceship.addImage(rocketImg);

    textSize(48);
    text("Docking Successful!!", 500, 700);
    
  }

  drawSprites();
}





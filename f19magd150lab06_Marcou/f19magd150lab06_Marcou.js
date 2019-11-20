var speedX =10;
var characterYPosition = 590;
var characterXPosition = 40;

var onGround = false;
var gravity = 1.5;
var jumpVelocity = 0.0;
var jumpHeight = -20;


function setup(){
  createCanvas(1000,600);
  rectMode(CENTER);
}

function draw()
{
  background(0);
  rect(characterXPosition+speedX,characterYPosition,20,20);
  cameraM();
  fill(255);
 
  update();
  movement();
  
  collision();
  
  obstacles();
  
  
  

  
 
} 

function update()// updates gravity
{
  jumpVelocity = gravity + jumpVelocity;
  characterYPosition = jumpVelocity + characterYPosition;
  
  if(characterYPosition >= 590)
  {
    characterYPosition = 590;
    onGround=true;
  }
  else
  {
    onGround = false;
  }
}

function movement() // creating movemnent for the box such as left and right
{
  if(keyIsPressed)
  {
    if (keyIsDown(LEFT_ARROW)) 
    {
      speedX += -10;
    } 
    else if (keyIsDown(RIGHT_ARROW)) 
    {
      speedX+=10;
    }
  }
}

function jump()// to make sure the box's jump does not go on forever
{
 if(keyIsDown(UP_ARROW))
    {
      jumpVelocity = jumpHeight;
    }
}

function keyPressed()// to make sure the box's jump does not go on forever
{
 if(onGround)
 {
    jump(); 
 }
}

function obstacles()// creates obstacles for the player
{
  rect(300, 565, 50,70);
  push();
  scale(0.8);
  rect(300, 565, 50,70);
  pop();
  
  push();
  rotate(-51);
  translate(-350,300);
  rect(350, 450, 70, 70);
  pop();
  rect(650,575, 50,50);
  rect(800, 575, 50, 50);
  rect(800, 450, 50, 50);

}

function cameraM() // makes the screen move with the box
{
 translate(-characterXPosition,0); 
}

function collision()// makes the character's position rtesert when it collides with obstacles
{
  if(characterXPosition+speedX<=0)
  {
   speedX*=-1; 
  }
   if(dist(characterXPosition+speedX,characterYPosition, 265, 565)<=40)
  {
    speedX=speedX*0;
  }
  
  if(dist(characterXPosition+speedX,characterYPosition, 230, 452)<=20)
  {
    speedX*=0;
  }
  if(dist(characterXPosition+speedX, characterYPosition, 440, 565)<=35)
  {
    speedX*=0;
  }
  if(dist(characterXPosition+speedX, characterYPosition, 630, 575)<=25)
  {
   speedX*=0; 
  }
  if(dist(characterXPosition+speedX, characterYPosition, 780, 575)<=25)
  {
   speedX*=0; 
  }
  if(dist(characterXPosition+speedX, characterYPosition, 780, 450)<=25)
  {
    speedX*=0;  
  }
  
 
}

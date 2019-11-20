var img;
var img2;
var a=400;
var reverb;
var mySound;
function preload()//Loads images
{
	img=loadImage("pexels-photo-1528975.jpeg");
	img.loadPixels();
	img2=loadImage("pexels-photo-954539.jpeg");
	soundFormats('mp3');//sets sound file type
	mySound= loadSound('bensound-epic.mp3');//loads sound. Sound was taken from https://www.bensound.com/
}


function setup() // creates canvas
{
	reverb = new p5.Reverb();//taken from p5 reference

  createCanvas(800, 400);
  mySound.setVolume(0.1);//taken from example
  reverb.process(mySound, 3, 2);
  mySound.amp(0.1,);
  mySound.play();
}

function draw() // draws images
{
  background(220);
  push();
  tint(255,126);// gives tint
  image(img,0,0,width/2,height);
  
  pop();
  push();
  image(img2,a,0,width/2,height);
  filter(INVERT);//changes filter
  pop();
  
}


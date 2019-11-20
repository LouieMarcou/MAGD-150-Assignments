
var sliders=[];
var x;
var y;
var z;
var s;
var b;
var cap;
var button;//taken from example
var magic;
var newFont;
function preload()
{
	magic = loadTable('MAGICDATAFILE.csv', 'csv');
	newFont = loadFont('GARA.ttf');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  
  
  button= createButton('Press');
  button.position(358,387);
  button.mousePressed(capture);
  
  
  for(var a =0;a<3;a++)
  {
	 sliders[a]=createSlider(10,400,200);
  }
  sliders[0].position(10, 50);
  sliders[1].position(10,70);
  sliders[2].position(10,90);
  
  
  b=createSlider(0,10,1,1);
  b.position(10,150);
  
}

function draw() {
  background(255);
  translate(-100,-100,0);
  let dirX = (mouseX / width - 0.5) * 2;//used form p5 reference
  let dirY = (mouseY / height - 0.5) * 2;//used from p5 reference
  directionalLight(250, 250, 250, -dirX, -dirY, -1);//used from p5 reference
  x = sliders[0].value();
  y = sliders[1].value(); 
  z = sliders[2].value(); 
  s = b.value();
  camera(x,y,z,0,0,0,0,1,0);
 
  
  translate(100,100,0);
  push();
  
  rotateX(frameCount * s/100);
  rotateY(frameCount * s/100);
  ambientLight(300);
  ambientMaterial(130, 70, 70);
  texture(cap);
  box(60);
  pop();
  textFont(newFont);
  text(magic.getString(0,0),-100,0);
  ambientLight(300);
  translate(0,-200,);
  fill(0);
  
  beginShape();
  
  vertex(0,50,50);
  vertex(50,50,0);
  vertex(50,100,0);
  vertex(0,100,0);
  endShape(CLOSE);
  
}

function capture(){
	cap= createCapture(VIDEO);
	cap.size(400,400);
	texture(cap);
}
var i =0;
var myFont;
var aFont;
var lines = [];
var pdf;

function preload()// loads the fonts and text file and strings
{
	aFont = loadFont("GARA.ttf");
	myFont = loadFont("POORICH.ttf");//taken from example
	lines = loadStrings("AvengersStrings.txt");
	textFont(myFont);
}

function setup()// sets the font and pdf stuff
{
	createCanvas(400, 400);
	textAlign(CENTER);
	
	pdf = createPDF();//taken from example
	pdf.beginRecord();
}
function draw() //draws the poster 
{
  background(153,50,204);

  let v1 = createVector(width);
  let v2 = createVector(height/4);
  let centerH = createVector(height/2);
  let v3 = createVector(height/4);
  v1.div(2);
  v3.mult(3);
  
  
  push();
  if(i<=80)
  {
    textSize(i);
    text(lines[0],v1.x, v2.x);
	push();
	textFont(aFont);
    text(lines[1], v1.x, v3.x);
	pop();
  }
  else if(i>=100)
  {
    i=1;
  }
  i++;
  pop();
  textSize(60);
  ellipse(v1.x, centerH.x, 80,80);
  text(str('A'), v1.x, centerH.x+15);
  
  
}

function mousePressed()// saves as a pdf, taken from example
{
	pdf.save();
}
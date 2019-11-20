let tree1;
let tree2;
let tree3;
var distances = [];// This creates an array
distances[0]=100;// These store numbers in the array
distances[1]=110;
distances[2]=120;
distances[3]=130;
distances[4]=140;
function setup() {
  createCanvas(700, 400);
  rectMode(CENTER);
  tree1 = new Tree(50,100);
  tree2 = new Tree(50,100);
}

function draw() {// Creates the grass, sky, and trees and makes the trees farhter apart by using the numbers in the array
  background(0,150,255);
  fill(0,200,0);
  rect(350,400,700,40);
  for( let i =0; i<distances.length;i++)
  {
    tree1.draw();
    translate(distances[i],0);
    tree2.draw();
  
    
  }
}

class Tree{ //Class that makes a tree
	constructor(width, height){ // makes the varaibles ank inputs the height and width of the tree trunk
		var trunkWidth, trunkHeight, trunkColor, leaves, leavesColor;
		this.trunkWidth=width;
		this.trunkHeight=height;
		this.trunkColor= color(139,69,19);
        this.leavesColor = color(30, 147, 45);
	}
	
	draw(){//draws the the tree and the leaves
		fill(this.trunkColor);
		rect(this.trunkWidth,340,this.trunkWidth,this.trunkHeight);
        fill(this.leavesColor);
        noStroke();
        circle(this.trunkWidth,280,40);
        circle(this.trunkWidth-20,290,40);
        circle(this.trunkWidth+20,290,40);
	}
}
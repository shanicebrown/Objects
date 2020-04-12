




//declare variale for right creature
var rightCreature; 

//declere variable for left creature
var leftCreature;

function setup () {
  createCanvas(400, 400);
//create object for right creature 
 rightCreature = {
  color1 : color(200, 100, 50),
  color2 : color(100, 88, 42),
  h : 50,
  w : 75,
  xOffset : 50
}
 
 //create object for left creature
 leftCreature = {
  color1 : color(200, 110, 50),
  color2 : color(200, 88, 42),
  h : 60,
  w: 80,
  xOffset : -50

}
 // Bonus Challenge 
  var value = 5;
 
  
  print("double equal signs are used in conditional statements i.e. var value == 5")
}

function draw () {
background(250);
 // #3 Draw rightCreature to then right of the mouse
fill(rightCreature.color1);
noStroke();
rect(rightCreature.xOffset+mouseX,mouseY,rightCreature.h,rightCreature.w);

fill(rightCreature.color2);
ellipse(rightCreature.xOffset+mouseX,mouseY,rightCreature.h,rightCreature.w);

// #3 Draw leftCreature to the left of the mouse
fill(leftCreature.color1);
noStroke();
rect(leftCreature.xOffset+mouseX,mouseY,leftCreature.h,leftCreature.w);

fill(leftCreature.color2);
ellipse(leftCreature.xOffset+mouseX, mouseY,leftCreature.h,leftCreature.w);

}

// #4 Add mousePressed()
// #4 Use random() to change some properties
function mousePressed(){
rightCreature.color1 = random(38, 200);
rightCreature.color2 = random(0,255);
leftCreature.color1 = random(50, 185);
leftCreature.color2 = random(200, 255);
}
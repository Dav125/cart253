// Exercise 1 - Movement
// Pippin Barr
//
// Starter code for exercise 1.
// Draws a moving square and circle that intersect
// in the middle of the canvas.

// The current position and size of the circle
let circleX;
let circleY;
let circleSize = 100;

// The current position and size of the square
let squareX;
let squareY;
let squareSize = 100;

/////////////////////// Start New //////////////////////////////

// The new objects position and size when it moves from left to right
let rectX;
let rectY;
let rectSizeW = 100;
let rectSizeH = 25;

//////////////////////End New /////////////////////////////////

// The new objects that follows the mouse


// preload()
//
// Nothing here

function preload() {

}


// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(640,640);

  // Start the circle off screen to the bottom left
  // We divide the size by two because we're drawing from the center
  circleX = -circleSize/2;
  circleY = height + circleSize/2;

  // Start the square off screen to the bottom right
  // We divide the size by two because we're drawing from the center
  squareX = width + squareSize/2;
  squareY = height + squareSize/2;

  // We'll draw rectangles from the center
  rectMode(CENTER);
  // We won't have a stroke in this
  noStroke();

  ////////////////////// Start New `///////////////////////

  // Start the rectangle off the screen to the center left
  rectX = -rectSizeW/2;
  rectY = height/2 + rectSizeH/2;

  rectMode(CENTER);
  noStroke();
  //////////////////// END NEW /////////////////////////////
}


// draw()
//
// Change the circle and square's positions so they move
// Draw the circle and square on screen

function draw() {
  // We don't fill the background so we get a drawing effect

  // Move circle up and to the right
  circleX += 1;
  circleY -= 1;
  // Make the circle transparent red
  fill(255,0,0,10);
  // Display the circle
  ellipse(circleX,circleY,circleSize,circleSize);

  // Move square up and to the left
  squareX -= 1;
  squareY -= 1;
  // Make the square transparent blue
  fill(0,0,255,10);
  // Display the square
  rect(squareX,squareY,squareSize,squareSize);


///////////////////// Start New ///////////////////////////
  // New shape that moves from left to right
  // Move rectangle from left to right
  rectX += 1;


  // Make the rectangle green
  fill(0,255,0,10);

  // Display the rectangle
  rect(rectX,rectY,rectSizeW,rectSizeH);

////////////////// End New ////////////////////////////////

}

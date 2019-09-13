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



// The new objects that follows the mouse
let bubbleImage;
let bubbleX;
let bubbleY;
let bubbleSize = 50;

// New image the goes the opposite direction of the other objects
let strokeImage;
let strokeX;
let strokeY;
let strokeSize = 100;

//////////////////////End New /////////////////////////////////
// preload()
//
// Nothing here

function preload() {
bubbleImage = loadImage("assets/images/Bubble.png");
strokeImage = loadImage("assets/images/black-felt-texture.png")
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

  // Starting position of the stoke at the top of the screen
  strokeX = width/2;
  strokeY = -height + strokeSize/2;


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
  /////////////////Start New////////////////////////////
  strokeY += 1;
  image(strokeImage, strokeX, strokeY,strokeSize,strokeSize);


  /////////////// End New /////////////////////////////


///////////////////// Start New ///////////////////////////
  // New shape that moves from left to right
  // Move rectangle from left to right
  rectX += 1;


  // Make the rectangle green
  fill(0,255,0,10);

  // Display the rectangle
  rect(rectX,rectY,rectSizeW,rectSizeH);

  // New Image that follows the mouse
  bubbleX = mouseX;
  bubbleY = mouseY;


  // Display the bubble image
  image(bubbleImage,bubbleX,bubbleY,bubbleSize,bubbleSize);
  imageMode(CENTER);



////////////////// End New ////////////////////////////////

}

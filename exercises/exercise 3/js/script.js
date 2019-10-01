"use strict";

/******************************************************************************
Where's Sausage Dog? Where is it indeed...
by David Fong

An algorithmic version of a Where's Wally/Waldo searching game where you
need to click on the sausage dog you're searching for in amongst all
the visual noise of other animals. ------> I'll see what I can do.

Animal images from:
https://creativenerds.co.uk/freebies/80-free-wildlife-icons-the-best-ever-animal-icon-set/
******************************************************************************/

// Position and image of the sausage dog we're searching for
let targetX;
let targetY;
let targetImage;

////////////////////////////////// Start New ////////////////////////////////

// Random()
//
// The size of the dog will change random when it appears in the screen
let targetSize;

////////////////////////////////// End New //////////////////////////////////

// The ten decoy images
let decoyImage1;
let decoyImage2;
let decoyImage3;
let decoyImage4;
let decoyImage5;
let decoyImage6;
let decoyImage7;
let decoyImage8;
let decoyImage9;
let decoyImage10;

// The number of decoys to show on the screen, randomly
// chosen from the decoy images
let numDecoys = 100;

// Keep track of whether they've won
let gameOver = false;

///////////////////////// Start New ///////////////////////////

// The necessary variables to create an interface to find the lost dog
// Loads the dog image in the interfaces
let lostDog;
let winDog;

// Variable for the color interface
let red = 100;
let green = 100;
let blue = 220;


// Loads the rectangle interface
let interRect;
let interRectX;
let interRectY;
let interRectW;
let interRectH;

// The dog moves when the game is over
let winDogX;
let winDogY;
let winDogSpeed;
let winDogVX;

// Variable for the color of the winning screen
let rngr;
let rngg;
let rngb;




///////////////////////// End New /////////////////////////////

// preload()
//
// Loads the target and decoy images before the program starts
function preload() {
  targetImage = loadImage("assets/images/animals-target.png");

  decoyImage1 = loadImage("assets/images/animals-01.png");
  decoyImage2 = loadImage("assets/images/animals-02.png");
  decoyImage3 = loadImage("assets/images/animals-03.png");
  decoyImage4 = loadImage("assets/images/animals-04.png");
  decoyImage5 = loadImage("assets/images/animals-05.png");
  decoyImage6 = loadImage("assets/images/animals-06.png");
  decoyImage7 = loadImage("assets/images/animals-07.png");
  decoyImage8 = loadImage("assets/images/animals-08.png");
  decoyImage9 = loadImage("assets/images/animals-09.png");
  decoyImage10 = loadImage("assets/images/animals-10.png");

  ///////////////////////// Start New ///////////////////////////

  // Load the dog image for the interfaces
  lostDog = loadImage("assets/images/animals-target.png");

  winDog = loadImage("assets/images/animals-target.png");

  ///////////////////////// End New /////////////////////////////

}

// setup()
//
// Creates the canvas, sets basic modes, draws correct number
// of decoys in random positions, then the target
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#ffff00");
  imageMode(CENTER);

//////////////////////////// Start New ///////////////////////////

// Random()
//
// The size of the dog will change random when it appears in the screen
  targetSize = random(10,200);

/////////////////////////// End New /////////////////////////////

  // Use a for loop to draw as many decoys as we need
  for (let i = 0; i < numDecoys; i++) {
    // Choose a random location on the canvas for this decoy
    let x = random(0, width);
    let y = random(0, height);
    // Generate a random number we can use for probability
    let r = random();
    // Use the random number to display one of the ten decoy
    // images, each with a 10% chance of being shown
    // We'll talk more about this nice quality of random soon enough.
    // But basically each "if" and "else if" has a 10% chance of being true
    if (r < 0.1) {
      image(decoyImage1, x, y);
    } else if (r < 0.2) {
      image(decoyImage2, x, y);
    } else if (r < 0.3) {
      image(decoyImage3, x, y);
    } else if (r < 0.4) {
      image(decoyImage4, x, y);
    } else if (r < 0.5) {
      image(decoyImage5, x, y);
    } else if (r < 0.6) {
      image(decoyImage6, x, y);
    } else if (r < 0.7) {
      image(decoyImage7, x, y);
    } else if (r < 0.8) {
      image(decoyImage8, x, y);
    } else if (r < 0.9) {
      image(decoyImage9, x, y);
    } else if (r < 1.0) {
      image(decoyImage10, x, y);
    }
  }

  // Once we've displayed all decoys, we choose a random location for the target
  targetX = random(0, width);
  targetY = random(0, height);

  // And draw it (because it's the last thing drawn, it will always be on top)
  image(targetImage, targetX, targetY, targetSize, targetSize);

  ///////////////////////// Start New ///////////////////////////

  // Preparing the size of the interface
  interRectX = width - 201;
  interRectY = 1;
  interRectW = 200;
  interRectH = 200;

  // Putting this condition in order for the dog to go
  // underneath the interface
  while (targetX > interRectX && targetY < interRectY + interRectH) {
    targetX = random(0, width);
    targetY = random(0, height);
  }

//Noise()
//
// Using this function to make my dog move more freely
  winDogSpeed = random(0, 1000);
  winDogVX = random(0, 1000);

//background()
//
// To make my new background change to new colors
  rngr = random(0,255);
  rngg = random(0,255);
  rngb = random(0,255);
  ///////////////////////// End New /////////////////////////////
}


// draw()
//
// Displays the game over screen if the player has won,
// otherwise nothing (all the gameplay stuff is in mousePressed())
function draw() {

  ///////////////////////// Start New ///////////////////////////

  // Interface at the top right corner
  noStroke();

  fill(red, green, blue, 8);
  rect(interRectX, interRectY, interRectW, interRectH);
  image(lostDog, interRectX + interRectW / 2, interRectY + interRectH / 2, interRectW / 2, interRectH / 2);

  // Postion of the lost dog textFont
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text("WANTED DOG", interRectX + interRectW / 2, interRectY + interRectH / 2 + 50);
  ///////////////////////// End New /////////////////////////////
  ///////////////////////// Start New ///////////////////////////
  if (gameOver) {
    background(rngr,rngg,rngb);
    // Prepare our typography
    textFont("Helvetica");
    textSize(90);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(random(255),random(255),random(255));

    // Tell them they won!
    text("YOU WINNED!", width / 2, height / 2);

    // Draw a circle around the sausage dog to show where it is (even though
    // they already know because they found it!)
    noFill();
    stroke(random(255),random(255),random(255));
    strokeWeight(10);
    ellipse(targetX, targetY, targetImage.width, targetImage.height);



    // The apperance of the dog moving when we win the game
    image(winDog, winDogX, winDogY);

    // The speed of the dogs
    winDogX = width * noise(winDogVX);
    winDogY = height * noise(winDogSpeed);

    // The variation of speed of the dogs appearing
    winDogSpeed += 0.01;
    winDogVX += 0.02;


    ///////////////////////// End New /////////////////////////////
  }
}

// mousePressed()
//
// Checks if the player clicked on the target and if so tells them they won
function mousePressed() {
  // The mouse was clicked!
  // Check if the cursor is in the x range of the target
  // (We're subtracting the image's width/2 because we're using imageMode(CENTER) -
  // the key is we want to determine the left and right edges of the image.)
  if (mouseX > targetX - targetImage.width / 2 && mouseX < targetX + targetImage.width / 2) {
    // Check if the cursor is also in the y range of the target
    // i.e. check if it's within the top and bottom of the image
    if (mouseY > targetY - targetImage.height / 2 && mouseY < targetY + targetImage.height / 2) {
      gameOver = true;
    }
  }
}

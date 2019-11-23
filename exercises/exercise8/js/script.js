/*****************

Exercise 8

David Fong

In exercise 8, it is going to be an improved version of the
exercise 7 with the platform climber to the top

******************/

// Variable for the player avatar
let climber;

// Variable for platforms
let platformShort = [];
let platformLong = [];

// Variable for the background image
let mountainImage;

// Variable for the number of platform
let numbPlat = 20;

// Images asset for the game
let climbImg;
let platShortImg;
let platLongImg;
let mountainImg;

// state and startGame
//
// Variable for using switch function
let state = "startGame";

// Variable to store new font
let quantumfont;

// preload()
//
// To load the image assets for the game

function preload() {
  // background()
  //
  // To load the image assets for the start of the game
  climbImg = loadImage("assets/images/AvatarClimber.jpg");
  platShortImg = loadImage("assets/images/platform.jpg");
  platLongImg = loadImage("assets/images/platform2.jpg");
  mountainImg = loadImage("assets/images/mountain.jpg");

  // Adding a new font: -----> source:
  // https://www.1001freefonts.com/sci-fi-fonts-5.php
  quantumfont = loadFont("assets/fonts/quantum/quantflt.ttf");

}


// setup()
//
// To set-up the background of the mountain

function setup() {
  createCanvas(1280, 720);

  // climber class
  //
  // To put postion, the size, putting image and the speed
  climber = new Climber(500, 500, 500, 500, 2, climbImg, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW);


  // For loop
  //
  // To make array objects for platform
  for (let i = 0; i < numbPlat; i++) {

    // random()
    //
    // adding position for the platforms

    // For the position the short platform
    let reShortX = random(0, width);
    let reShortY = random(0, height);

    // For the position for long platform
    let reLongX = random(0, width);
    let reLongY = random(0, height);

    // Platform classes
    //
    // Platform that will be generated in the screen
    platformShortPlus = new Platform(reShortX, reShortY, 500, 500, platShortImg);
    platformLongPlus = new Platform(reLongX, reLongY, 1000, 500, platLongImg);

    // push()
    //
    // To add more platform in the screen as an array
    platformShort.push(platformShortPlus);
    platformLong.push(platformLongPlus);

  }
}


// startGame()
//
//Displaying the title screen of the game
function startScreen() {

  // push() and pop()
  //
  // To keep the text size, text font, and text alignment
  // from spreading trough other text that I might add
  push();

  // Adding a new font
  textFont(quantumfont);

  // To adjust my font size
  textSize(30);

  // text alignment
  textAlign(CENTER, CENTER);

  // No stroke
  noStroke();

  // Title of the game
  text("Press a button to start", width / 2, height / 4);

  pop();

  // The game starts when a button is pressed
  if (keyIsPressed) {
    state = "playGame";
  }
}
// gameScreen()
//
// thus function is for the game to be able to start and end
function gameScreen() {

  // Handle input for the climber
  climber.handleInput();
  // A function that pull the climber down
  climber.gravity();
  // This function help the climber move
  climber.move();
  // This function display the climber
  climber.display();

  // climber.pull
  //
  // Making the climber to fall down to the screen
  // as a universal function that is not part of the code
  climber.pull = 1;

  // climber.grounded
  //
  // To detect if the climber is touching the platform
  climber.grounded = false;

  // for loop
  //
  // new platform will appear as array

  for (let i = 0; i < platformShort.length; i++) {
    platformShort[i].display();
    climber.handleStanding(platformShort[i]);


  }

  for (let i = 0; i < platformLong.length; i++) {
    platformLong[i].display();
    climber.handleStanding(platformLong[i]);

  }

  // Climber.handleWrapping
  //
  // if the climber either goes up, the player moves to the next level
  // if it goes down, the game is over
  if (climber.y < 0) {

  }
  else if(climber.y > height) {

    // climber class
    //
    // To put postion, the size, putting image and the speed
    // This is also to reset the position when the climber falls to the abyss
    climber = new Climber(500, 500, 500, 500, 2, climbImg, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW);

    // endGame
    //
    // to change the state of the game 
    state = "endGame";


  }


}




// draw()
//
// Using the switch function
function draw() {
  // background()
  //
  // Using the mountain image
  background(mountainImg, 1280, 720);


  // switch()
  //
  // Adding this function to be able to be able change
  // the screen state of the game
  switch (state) {
    // "startGame"
    //
    // This is the state of the game where it
    // takes you to the the starting screen
    case "startGame":
      // startScreen()
      //
      // This is the start menu of the game
      startScreen();
      break;
      // "playGame"
      //
      // This is the state of the screen of the where the game start to play
    case "playGame":
      // gameScreen()
      //
      // This is where the action takes place in the game
      gameScreen();
      break;
      // "endGame"
      //
      // This is the state of game where it is over
    case "endGame":
      // gameOver()
      //
      // This is game over screen
      gameOver();
  }
}

// gameOver()
//
// This is the screen where the game is over when the
// the avatar falls off the screen
function gameOver() {
  // Adding push and pop
  //
  // Display the game over screen
  push();
  textFont(quantumfont);
  textSize(40);
  textAlign(CENTER, CENTER);
  noStroke();
  fill(255, 100, 100);
  text("Game Over", width / 2, height / 4);
  pop();

  // if statement
  //
  // if the mouse is pressed in the game over screen,
  // the game return to the
  if (mouseIsPressed) {
    state = "startGame";
  }

}

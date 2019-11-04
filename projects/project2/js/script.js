// Predator-Prey Simulation
// by David Fong
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.


// For the code with the gradient, I found it in P5
// Source: https://p5js.org/examples/color-linear-gradient.html

// Our predator
let tiger;

// The three prey
let antelope;
let zebra;
let bee;

// Adding these two variable to create a horizontal
// gradient
let startColor;
let endColor;

// state and startGame
//
// Variable for using switch function
let state = "startGame";

// Variable to store new font
let quantumfont;

// preload()
//
// Adding this to store my font
function preload() {
  // Adding a new font: -----> source:
  // https://www.1001freefonts.com/sci-fi-fonts-5.php
  quantumfont = loadFont("assets/fonts/quantum/quantflt.ttf");

}

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);
  tiger = new Predator(100, 100, 5, color(200, 200, 0), 40);
  antelope = new Prey(100, 100, 10, color(255, 100, 10), 50);
  zebra = new Prey(100, 100, 8, color(255, 255, 255), 60);
  bee = new Prey(100, 100, 20, color(255, 255, 0), 10);

  // color()
  //
  // Setting these 2 set of color to make gradient
  // it allows me to modify my color picker
  startColor = color(255,0,255);
  endColor = color(0);
}

// startGame()
//
// Displaying the title screen of the game
function startScreen(){

  // push() and pop()
  //
  // To keep the text size, text font, and text alignment
  // from spreading trough other text that I might add
  push();

  // Adding a new font
  textFont(quantumfont);

  // To adjust my font size
  textSize(40);

  // text alignment
  textAlign(CENTER, CENTER);

  // No stroke
  noStroke();

  // Color fill of the title
  text("Working title", width / 2, height / 4);

  pop();

  // The game starts when a button is pressed
  if (mouseIsPressed || keyIsPressed){
    state = "playGame";
  }
}

// gameScreen()
//
// This function is for the game to be able to play the game
// I reposition the all the Handle input, movement, eating and displayed objects here
function gameScreen() {

  // Handle input for the tiger
  tiger.handleInput();

  // Move all the "animals"
  tiger.move();
  antelope.move();
  zebra.move();
  bee.move();

  // Handle the tiger eating any of the prey
  tiger.handleEating(antelope);
  tiger.handleEating(zebra);
  tiger.handleEating(bee);

  // Display all the "animals"
  tiger.display();
  antelope.display();
  zebra.display();
  bee.display();
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  //background(0);

  // Applying this code as a background color
  // to make
  setGradient(0,0,windowWidth, windowHeight, startColor, endColor);

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


// setGradient()
//
// Im using this function to set up the parameter
// to create my gradient
function setGradient(x, y, w, h, c1, c2){

push();
noFill();

// Using for loop
//
// it allows me to create a starting point (cx)
// it creates lines of color that changes
// from the start to finish with window width
for(let cx = x; cx <= x + w; cx++ ){

  // map()
  //
  // the program allows me to calculate the ratio
  // of the background by percentage decimal from
  // left to right
  let inter = map(cx, x, x + w, 0, 1);
  let c = lerpColor(c1 ,c2 ,inter);
  stroke(c);
  line(cx, y, cx, y + h);
}

pop();

}

// gameOver()
//
// This is the screen where the is over when the predator's HP
// hits 0
function gameOver(){
  // Adding push and pop
  //
  // Display the game over title at the screen
  textFont(quantumfont);
  textSize(40);
  textAlign(CENTER, CENTER);
  noStroke();
  fill(255, 100, 100);
  text("Game Over", width / 2, height / 4);

  // if statement
  //
  // if either the mouse or the key is pressed,
  // the game restart to the beginning of the screen
  if (mouseIsPressed || keyIsPressed){
    state = "startGame";
  }
}

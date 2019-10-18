// Predator-Prey Simulation
// by Pippin Barr
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Our predator
let tiger;

//////////////////////////// Start New ///////////////////////////////

// New predator
let lion;

/////////////////////////// End New //////////////////////////////////

// The three prey
let antelope;
let zebra;
let bee;

//////////////////////////// Start New ////////////////////////////////

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
//
// NEW
//
// Added new Predator object and added new directional keys as
// new argument for the predator class
function setup() {
  createCanvas(windowWidth, windowHeight);
  tiger = new Predator(100, 100, 5, color(200, 200, 0), 40, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW);
  lion = new Predator(200, 200, 5, color(0, 200, 200), 45, 87, 83, 65, 68); // New
  antelope = new Prey(100, 100, 10, color(255, 100, 10), 50);
  zebra = new Prey(100, 100, 8, color(255, 255, 255), 60);
  bee = new Prey(100, 100, 20, color(255, 255, 0), 10);
}

//////////////////////////// End New ///////////////////////////////////

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(0);
//////////////////////////// Start New /////////////////////////////////
  // Handle input for the tiger
  tiger.handleInput();

  // New handle input for the lion
  lion.handleInput(); // New

  // Move all the "animals"
  tiger.move();
  lion.move(); // New
  antelope.move();
  zebra.move();
  bee.move();

  // Handle the tiger eating any of the prey
  tiger.handleEating(antelope);
  tiger.handleEating(zebra);
  tiger.handleEating(bee);

  // Display all the "animals"
  tiger.display();
  lion.display(); // New
  antelope.display();
  zebra.display();
  bee.display();
//////////////////////////// End New ////////////////////////////////////////
}

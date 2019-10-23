// Tiger lion Simulation
// by David Fong
//
// Both the lion and the tiger are hungry to eat,
// guide them by using directional buttons to the preys
// before they're dead

// Our predator
let tiger;

//////////////////////////// Start New ///////////////////////////////

// New predator
let lion; // New

//New images for the animal
let tigerImg;
let lionImg;
let antelopeImg;
let zebraImg;
let beeImg;

/////////////////////////// End New //////////////////////////////////

// New Prey
let newAntelope = [];
let newZebra = [];
let newBee = [];

// How many preys that are being shown
let numPreys = 3;

//////////////////////////// Start New ////////////////////////////////

// preload()
//
// To load the images for the animals
function preload(){
  tigerImg = loadImage("assets/images/tiger.png");
  lionImg  = loadImage("assets/images/lion.png");
  antelopeImg = loadImage("assets/images/antelope.png");
  zebraImg = loadImage("assets/images/zebra.png");
  beeImg = loadImage("assets/images/bee.png");
}

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
  tiger = new Predator(100, 100, 5, color(200, 200, 0), 40, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, 32, tigerImg);
  lion = new Predator(200, 200, 5, color(0, 200, 200), 45, 87, 83, 65, 68, 32, lionImg); // New

  for (let i = 0; i < numPreys; i++) {

    // random()
    //
    // Both the foodX and foodY are here
    // to change the position of the new preys
    let foodX = random(0, width);
    let foodY = random(0, height);

    // New variable to be able
    // to add new array version of the animals
    let addAntelope = new Prey(foodX, foodY, 10, color(255, 100, 10), 50, antelopeImg);
    let addZebra = new Prey(foodX, foodY, 8, color(255, 255, 255), 60, zebraImg);
    let addBee = new Prey(foodX, foodY, 20, color(255, 255, 0), 10, beeImg);

    // push()
    //
    // To add new preys in the contanner of the array
    // so that new preys will appear
    newAntelope.push(addAntelope);
    newZebra.push(addZebra);
    newBee.push(addBee);
  }


}

//////////////////////////// End New ///////////////////////////////////

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to greed
  background(0,200,100);
  //////////////////////////// Start New /////////////////////////////////
  // Handle input for the tiger
  tiger.handleInput();

  // New handle input for the lion
  lion.handleInput(); // New

  // Move all the "animals"
  tiger.move();
  lion.move(); // New

  // Display all the "animals"
  tiger.display();
  lion.display(); // New

  // For loop function
  //
  // New animals will appear as array objects

  // For the new antelope that appear
  for (let i = 0; i < newAntelope.length; i++) {

    // All of the move() and display() of the new antelope
    newAntelope[i].move();
    newAntelope[i].display();

    //handleEating()
    //
    // Both the tiger and lion will be able to eat the
    // new array object version of the preys
    //
    // Also having the [i] with the new animals
    // helps keep track of the new animals
    tiger.handleEating(newAntelope[i]);
    lion.handleEating(newAntelope[i]);
  }

  // For the new Zebra that will appear
  for (let i = 0; i < newZebra.length; i++) {

    // All of the move() and display() of the new Zebra
    newZebra[i].move();
    newZebra[i].display();


    //handleEating()
    //
    // Both the tiger and lion will be able to eat the
    // new array object version of the preys
    //
    // Also having the [i] with the new animals
    // helps keep track of the new animals
    tiger.handleEating(newZebra[i]);
    lion.handleEating(newZebra[i]);
  }

  // For the new Bee that will appear
  for (let i = 0; i < newBee.length; i++) {

    // All of the move() and display() of the new Bee
    newBee[i].move();
    newBee[i].display();

    //handleEating()
    //
    // Both the tiger and lion will be able to eat the
    // new array object version of the preys
    //
    // Also having the [i] with the new animals
    // helps keep track of the new animals
    tiger.handleEating(newBee[i]);
    lion.handleEating(newBee[i]);
  }

  //////////////////////////// End New ////////////////////////////////////////
}

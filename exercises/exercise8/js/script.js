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

// Variable for the starting platform
let startingPlat = [];

// Variable for the snows
let snowFall = [];

// Variable for the number of snow that will fall
let snowNumb = 100;

// For the number of the starting platform what supports the
// climber at the beginning
let numbStartP = 1;

// Variable for the background image
let mountainImage;

// Variable for the number of platform
let numbPlat = 10;

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

// Variable for the jump effect
let jumpSFX;

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
  mountain2Img = loadImage("assets/images/mountain 2.jpg");
  mountain3Img = loadImage("assets/images/mountain 3.jpg");

  // Adding a new font: -----> source:
  // https://www.1001freefonts.com/sci-fi-fonts-5.php
  quantumfont = loadFont("assets/fonts/quantum/quantflt.ttf");

  // Sound for jump: --------> Source:
  // https://freesound.org/people/cabled_mess/sounds/350906/
  jumpSFX = new Audio("assets/sounds/Jump.wav");

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

  // For loop for snow
  //
  // To make the number of snows that will fall
  for (let f = 0; f < snowNumb; f++) {
    // random()
    //
    // Making the snow spawn on top of the screen
    let snowX = random(0, width);
    let snowY = random(0, height);


    // snowFallPlus
    //
    // New snow that will fall
    snowFallPlus = new Snow(snowX, snowY, color(230, 255, 255), 5);

    // push()
    //
    // to make array objects for snow
    snowFall.push(snowFallPlus);
  }

  //Array
  //
  // For the starting platform
  for (let s = 0; s < numbStartP; s++) {
    // Starting platform
    //
    //this is a platform for the climber for the start of the game
    // in case all the the random platform doesn't spawn under
    startingPlatPlus = new Platform(500, 700, 2000, 1000, platLongImg);

    // push
    //
    // To add the platform as an array
    startingPlat.push(startingPlatPlus);
  }

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

  // snow
  //
  // for loop for snow
  for (let f = 0; f < snowFall.length; f++) {
    snowFall[f].display();
    snowFall[f].move();
    snowFall[f].gravity();
    snowFall[f].handleWrapping();
  }



  // for loop for starting platform
  //
  // the starting platform will be an array
  for (let s = 0; s < startingPlat.length; s++) {
    // startingPlat
    //
    // To display the starting platform and the handleStanding
    startingPlat[s].display();
    climber.handleStanding(startingPlat[s]);
  }



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

    // nextLevel()
    //
    // Once the climber goes up, the state moves to the next level
    state = "nextLevel";

    // To lead to a different level of setup
    NextlevelSetup();
  } else if (climber.y > height) {

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

// NextlevelSetup()
//
// A new setup for the 2nd level
function NextlevelSetup() {
  // climber class
  //
  // To put postion, the size, putting image and the speed
  // This is also to reset the position when the climber goes up
  climber = new Climber(500, 500, 500, 500, 2, climbImg, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW);

  // For loop for snow
  //
  // To make the number of snows that will fall
  for (let f = 0; f < snowNumb; f++) {
    // random()
    //
    // Making the snow spawn on top of the screen
    let snowX = random(0, width);
    let snowY = random(0, height);


    // snowFallPlus
    //
    // New snow that will fall
    snowFallPlus = new Snow(snowX, snowY, color(230, 255, 255), 5);

    // push()
    //
    // to make array objects for snow
    snowFall.push(snowFallPlus);
  }

  // To clear the previous platform from the last level
  // and make new ones
  platformShort = [];
  platformLong = [];

  // For loop for the second level
  //
  // To make array objects for platform
  //
  // and the z is to differentiate the array from the previous level
  for (let z = 0; z < numbPlat; z++) {

    // random()
    //
    // adding position for the platforms

    // For the position the short platform
    let reShortXZ = random(0, width);
    let reShortYZ = random(0, height);

    // For the position for long platform
    let reLongXZ = random(0, width);
    let reLongYZ = random(0, height);

    // Platform classes
    //
    // Platform that will be generated in the screen
    platformShortPlusZ = new Platform(reShortXZ, reShortYZ, 500, 500, platShortImg);
    platformLongPlusZ = new Platform(reLongXZ, reLongYZ, 1000, 500, platLongImg);

    // push()
    //
    // To add more platform in the screen as an array
    platformShort.push(platformShortPlusZ);
    platformLong.push(platformLongPlusZ);

  }
}
// secondLevel()
//
// This the middle part of the mountain
function secondLevel() {
  // The background for second level
  background(mountain2Img, 1280, 720);

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

  // snow
  //
  // for loop for snow
  for (let f = 0; f < snowFall.length; f++) {
    snowFall[f].display();
    snowFall[f].move();
    snowFall[f].gravity();
    snowFall[f].handleWrapping();
  }


  // for loop
  //
  // new platform will appear as array

  for (let z = 0; z < platformShort.length; z++) {
    platformShort[z].display();
    climber.handleStanding(platformShort[z]);


  }

  for (let z = 0; z < platformLong.length; z++) {
    platformLong[z].display();
    climber.handleStanding(platformLong[z]);

  }

  // Climber.handleWrapping
  //
  // if the climber either goes up, the player moves to the next level
  // if it goes down, the game is over
  if (climber.y < 0) {
    // lastLevel()
    //
    // Once the climber goes up, the state moves to the next level
    state = "lastLevel";

    // climber class
    //
    // To put postion, the size, putting image and the speed
    // This is also to reset the position when the climber goes up
    climber = new Climber(500, 500, 500, 500, 2, climbImg, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW);

    // thirdLevelSetup
    //
    // to lead to the next level
    thirdLevelSetup();

  } else if (climber.y > height) {

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

// thirdLevelSetup
//
// the setup for the third level
function thirdLevelSetup() {

  // climber class
  //
  // To put postion, the size, putting image and the speed
  // This is also to reset the position when the climber goes up
  climber = new Climber(500, 500, 500, 500, 2, climbImg, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW);

  // For loop for snow
  //
  // To make the number of snows that will fall
  for (let f = 0; f < snowNumb; f++) {
    // random()
    //
    // Making the snow spawn on top of the screen
    let snowX = random(0, width);
    let snowY = random(0, height);


    // snowFallPlus
    //
    // New snow that will fall
    snowFallPlus = new Snow(snowX, snowY, color(230, 255, 255), 5);

    // push()
    //
    // to make array objects for snow
    snowFall.push(snowFallPlus);
  }

  // To clear the previous platform from the last level
  // and make new ones
  platformShort = [];
  platformLong = [];

  // For loop for the second level
  //
  // To make array objects for platform
  //
  // and the z is to differentiate the array from the previous level
  for (let w = 0; w < numbPlat; w++) {

    // random()
    //
    // adding position for the platforms

    // For the position the short platform
    let reShortXW = random(0, width);
    let reShortYW = random(0, height);

    // For the position for long platform
    let reLongXW = random(0, width);
    let reLongYW = random(0, height);

    // Platform classes
    //
    // Platform that will be generated in the screen
    platformShortPlusW = new Platform(reShortXW, reShortYW, 500, 500, platShortImg);
    platformLongPlusW = new Platform(reLongXW, reLongYW, 1000, 500, platLongImg);

    // push()
    //
    // To add more platform in the screen as an array
    platformShort.push(platformShortPlusW);
    platformLong.push(platformLongPlusW);

  }
}

// thirdLevel()
//
// This the top part of the mountain
function thirdLevel() {
  // Background()
  //
  // Changing the background to the top part of the maountain
  background(mountain3Img, 1280, 720);


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

  // snow
  //
  // for loop for snow
  for (let f = 0; f < snowFall.length; f++) {
    snowFall[f].display();
    snowFall[f].move();
    snowFall[f].gravity();
    snowFall[f].handleWrapping();
  }


  // for loop
  //
  // new platform will appear as array

  for (let w = 0; w < platformShort.length; w++) {
    platformShort[w].display();
    climber.handleStanding(platformShort[w]);


  }

  for (let w = 0; w < platformLong.length; w++) {
    platformLong[w].display();
    climber.handleStanding(platformLong[w]);

  }

  // Climber.handleWrapping
  //
  // if the climber either goes up, the player moves to the next level
  // if it goes down, the game is over
  if (climber.y < 0) {
    // winGame
    //
    // when the climber reaches the top, you win the game
    state = "winGame";

  } else if (climber.y > height) {

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

      // nextLevel
      //
      // Once the climber goes up level, the background changes
    case "nextLevel":
      // secondLevel
      //
      // the middle part of the mountain
      secondLevel();
      break;

      // lastLevel
      //
      // Once the climber goes up level, the background changes
    case "lastLevel":
      // thirdLevel
      //
      // the top part of the mountain
      thirdLevel();
      break;

      // "endGame"
      //
      // This is the state of game where it is over
    case "endGame":
      // gameOver()
      //
      // This is game over screen
      gameOver();
      break;
      // winGame
      //
      // This is the state with the win screen
    case "winGame":
      // winScreen()
      //
      // this is where you win the game
      winScreen();
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

// winScreen
//
// This is the screen where the climber reaches the top
// and wins
function winScreen() {
  // Adding push and pop
  //
  // Display the Win screen
  push();
  textFont(quantumfont);
  textSize(80);
  textAlign(CENTER, CENTER);
  noStroke();
  fill(100, 200, 100);
  text("You Win!", width / 2, height / 4);
  pop();

  // if statement
  //
  // if the mouse is pressed in the game over screen,
  // the game return to the
  if (mouseIsPressed) {
    state = "startGame";
  }
}

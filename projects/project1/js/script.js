"use strict";

/******************************************************

Game - Chaser
David Fong

A "simple" game of cat and mouse. The player is a circle and can move with keys,
if they overlap the (randomly moving) prey they "eat it" by sucking out its life
and adding it to their own. The player "dies" slowly over time so they have to keep
eating to stay alive.

Includes: Physics-based movement, keyboard controls, health/stamina,
random movement, screen wrap.

******************************************************/

////////////////////////// Start New ///////////////////////////////////
// Track whether the game is over
let gameOver = false;

// Player position, size, velocity
let playerX;
let playerY;
let playerRadius = 25;
let playerVX = 0;
let playerVY = 0;
let playerMaxSpeed = 2;
// Player health
let playerHealth;
let playerMaxHealth = 255;
// Player fill color
let playerFill = 50;

// Prey position, size, velocity
let preyX;
let preyY;
let preyRadius = 25;
let preyVX;
let preyVY;
let preyMaxSpeed = 4;

// More variable for prey to make noise() movements
let preyTX;
let preyTY;

// Prey health
let preyHealth;
let preyMaxHealth = 100;
// Prey fill color
let preyFill = 200;

// Amount of health obtained per frame of "eating" (overlapping) the prey
let eatHealth = 10;
// Number of prey eaten during the game (the "score")
let preyEaten = 0;


// New personal font Landsdowne.tff
// Source:-->https://www.1001freefonts.com/retro-fonts-8.php
let myFont;

// Variable for the player avatar
let monsterAvatar;

// Variable for ambient sound
let dungeonSound;

// Variable for monster sound
let monsterSound;


// preload()
//
// To load my assets
function preload() {
myFont = loadFont("assets/fonts/landsdowne/Landsdowne.ttf");

// Background sound playing
dungeonSound = loadSound("assets/sounds/ambient.wav");

// Avatar transforms when the shift buttons is pressed
monsterAvatar = loadImage("assets/images/monster.png");

// This sound plays when the shift button is pressed
monsterSound = loadSound("assets/sounds/monster.wav");


}

// setup()
//
// Sets up the basic elements of the game
function setup() {
  createCanvas(500, 500);

  noStroke();

  // We're using simple functions to separate code out
  setupPrey();
  setupPlayer();

  // loop(), playMode()
  //
  // Added a sound that plays in the background
  console.log(dungeonSound);
  dungeonSound.loop();
  dungeonSound.playMode("untilDone"); //<========= The sound will keep playing until it's done

// Noise()
//
// Using these codes to make the more fluent movement
preyTX = random(0, 1000);
preyTY = random(0, 1000);

///////////////////////////// End New ///////////////////////////////////////


}

// setupPrey()
//
// Initialises prey's position, velocity, and health
function setupPrey() {
  preyX = width / 5;
  preyY = height / 2;
  preyVX = -preyMaxSpeed;
  preyVY = preyMaxSpeed;
  preyHealth = preyMaxHealth;
}

// setupPlayer()
//
// Initialises player position and health
function setupPlayer() {
  playerX = 4 * width / 5;
  playerY = height / 2;
  playerHealth = playerMaxHealth;
}

/////////////////////////// Start New //////////////////////////////////////

// draw()
//
// While the game is active, checks input
// updates positions of prey and player,
// checks health (dying), checks eating (overlaps)
// displays the two agents.
// When the game is over, shows the game over screen.
function draw() {
  background(100, 100, 200);

  if (!gameOver) {
    handleInput();

    movePlayer();
    movePrey();

    updateHealth();
    checkEating();

    drawPrey();
    drawPlayer();

    preyScore();

  }
  else {
    showGameOver();
  }
}



// handleInput()
//
// Checks arrow keys and adjusts player velocity accordingly
function handleInput() {

  // keyIsDown()
  //
  // When the shift button is being used, player's health
  // drains faster
  if(keyIsDown(SHIFT)){

    // constrain()
    //
    // Using this function to keep the parametres from 100 to 0
    // intact in order for it for not drop down to negatives
    playerHealth = constrain(playerHealth - 2, 0, playerMaxHealth);

    // image(), imageMode(), and tint
    //
    // The player transfoms into a monster
    imageMode(CENTER);
    tint(255,playerHealth); //<--------------- In order for the image fades the same as the original version of the avatar
    image(monsterAvatar, playerX, playerY);

  }

  // Check for horizontal movement
  if (keyIsDown(LEFT_ARROW)) {
    playerVX = -playerMaxSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    playerVX = playerMaxSpeed;
  }
  else {
    playerVX = 0;
  }

  // Check for vertical movement
  if (keyIsDown(UP_ARROW)) {
    playerVY = -playerMaxSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    playerVY = playerMaxSpeed;
  }
  else {
    playerVY = 0;
  }
}

// preyScore()
//
// Shows the score of prey being eaten
function preyScore(){
  textFont(myFont);
  textSize(30);
  textAlign(CENTER, CENTER);

  text(preyEaten, width/2, height/2);

// Strings of if
//
// Whenever the prey gets eaten, it gets smaller and faster
  if (preyEaten === 1){
    preyRadius = 20;
    preyMaxSpeed = 5;
  }
  if(preyEaten === 3){
    preyRadius = 15;
    preyMaxSpeed = 6;
  }
  if(preyEaten === 5){
    preyRadius = 10;
    preyMaxSpeed = 7;
  }
  if(preyEaten === 7){
    preyRadius = 5;
    preyMaxSpeed = 8;
  }
  if(preyEaten === 9){
    playerRadius = 20;
    preyMaxSpeed = 9;
  }
  if(preyEaten === 11){
    playerRadius = 15;
    preyMaxSpeed = 10;
  }
  if(preyEaten === 13){
    playerRadius = 10;
    preyMaxSpeed = 11;
  }
  if (preyEaten === 15){
    playerRadius = 5;
    preyMaxSpeed = 12;
  }
}

/////////////////////////// End New /////////////////////////////////////////

// movePlayer()
//
// Updates player position based on velocity,
// wraps around the edges.
function movePlayer() {
  // Update position
  playerX = playerX + playerVX;
  playerY = playerY + playerVY;

  // Wrap when player goes off the canvas
  if (playerX < 0) {
    // Off the left side, so add the width to reset to the right
    playerX = playerX + width;
  }
  else if (playerX > width) {
    // Off the right side, so subtract the width to reset to the left
    playerX = playerX - width;
  }

  if (playerY < 0) {
    // Off the top, so add the height to reset to the bottom
    playerY = playerY + height;
  }
  else if (playerY > height) {
    // Off the bottom, so subtract the height to reset to the top
    playerY = playerY - height;
  }
}

// updateHealth()
//
// Reduce the player's health (happens every frame)
// Check if the player is dead
function updateHealth() {
  // Reduce player health
  playerHealth = playerHealth - 0.5;
  // Constrain the result to a sensible range
  playerHealth = constrain(playerHealth, 0, playerMaxHealth);
  // Check if the player is dead (0 health)
  if (playerHealth === 0) {
    // If so, the game is over
    gameOver = true;
  }
}

// checkEating()
//
// Check if the player overlaps the prey and updates health of both
function checkEating() {
  // Get distance of player to prey
  let d = dist(playerX, playerY, preyX, preyY);
  // Check if it's an overlap
  if (d < playerRadius + preyRadius) {
    // Increase the player health
    playerHealth = playerHealth + eatHealth;
    // Constrain to the possible range
    playerHealth = constrain(playerHealth, 0, playerMaxHealth);
    // Reduce the prey health
    preyHealth = preyHealth - eatHealth;
    // Constrain to the possible range
    preyHealth = constrain(preyHealth, 0, preyMaxHealth);

    // Check if the prey died (health 0)
    if (preyHealth === 0) {
      // Move the "new" prey to a random position
      preyX = random(0, width);
      preyY = random(0, height);
      // Give it full health
      preyHealth = preyMaxHealth;
      // Track how many prey were eaten
      preyEaten = preyEaten + 1;
    }
  }
}

//////////////////////// Start New //////////////////////////////////////////

// movePrey()
//
// Moves the prey based on random velocity changes
function movePrey() {
  // Change the prey's velocity at random intervals
  // random() will be < 0.05 5% of the time, so the prey
  // will change direction on 5% of frames
  if (random() < 0.05) {
    // Set velocity based on random values to get a new direction
    // and speed of movement
    //
    // Use map() to convert from the 0-1 range of the random() function
    // to the appropriate range of velocities for the prey

    // noise()
    //
    // Replace the random function in order for the prey to move more
    // fluentaly.
    preyVX = map(noise(preyTX), 0, 1, -preyMaxSpeed, preyMaxSpeed);
    preyVY = map(noise(preyTY), 0, 1, -preyMaxSpeed, preyMaxSpeed);

    // The variation of speed of the prey
    preyTX += 0.05;
    preyTY += 0.05;


  }

  // Update prey position based on velocity
  preyX = preyX + preyVX;
  preyY = preyY + preyVY;

  // Screen wrapping
  if (preyX < 0) {
    preyX = preyX + width;
  }
  else if (preyX > width) {
    preyX = preyX - width;
  }

  if (preyY < 0) {
    preyY = preyY + height;
  }
  else if (preyY > height) {
    preyY = preyY - height;
  }
}

// keyPressed and keyReleased()
//
// When we pressed the shift button, the player moves faster
// but loses health faster
function keyPressed(){
  if (keyCode === SHIFT){
    playerMaxSpeed = playerMaxSpeed * 4;

    // play()
    //
    // Monster sound is played
    monsterSound.play();
    monsterSound.volume = 0.3;
  }
}

function keyReleased(){
  if (keyCode === SHIFT){
    playerMaxSpeed = playerMaxSpeed / 4;

    // pause();
    //
    // the sound stops playing
    monsterSound.pause();
  }
}


/////////////////////////// End New ////////////////////////////////////////

// drawPrey()
//
// Draw the prey as an ellipse with alpha based on health
function drawPrey() {
  fill(preyFill, preyHealth);
  ellipse(preyX, preyY, preyRadius * 2);
}

// drawPlayer()
//
// Draw the player as an ellipse with alpha value based on health
function drawPlayer() {
  fill(playerFill, playerHealth);
  ellipse(playerX, playerY, playerRadius * 2);
}

// showGameOver()
//
// Display text about the game being over!
function showGameOver() {
  // Set up the font
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  // Set up the text to display
  let gameOverText = "GAME OVER\n"; // \n means "new line"
  gameOverText = gameOverText + "You ate " + preyEaten + " prey\n";
  gameOverText = gameOverText + "before you died."
  // Display it in the centre of the screen
  text(gameOverText, width / 2, height / 2);
}

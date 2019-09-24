/******************************************************

Game - The Artful Dodger
David Fong

A simple dodging game with keyboard controls -> (Let's try to make this interesting)

******************************************************/

// The position and size of our avatar circle
let avatarX;
let avatarY;
let avatarSize = 50;

// The speed and velocity of our avatar circle
let avatarSpeed = 10;
let avatarVX = 0;
let avatarVY = 0;

// The position and size of the enemy circle
let enemyX;
let enemyY;
let enemySize = 50;

// The speed and velocity of our enemy circle
let enemySpeed = 5;
let enemyVX = 5;

// How many dodges the player has made
let dodges = 0;

/////////////////////////// Start New ////////////////////////////////

// To write a text to show the score of the ball dodged
let ballDodge = "Balls dodged";

// To write a text to show the score of the ball getting hit
let ballHit = "Balls hit";

// How many balls the player hit
let hit = 0;

// Adding a new font: -----> source:
// https://www.1001freefonts.com/sci-fi-fonts-5.php
let myFont;

// Adding the preload function to load the new font
function preload() {

// New font to use
myFont = loadFont("assets/fonts/quantum/quantflt.ttf");
}

// Adding number variables to change color background
let red = 155;
let green = 155;
let blue = 155;

// Adding variables to change the color of the avatar
// This is the avatar's color
let avatarR = 0;
let avatarG = 0;
let avatarB = 0;




///////////////////////// End New ////////////////////////////////////

// setup()
//
// Make the canvas, position the avatar and anemy
function setup() {
  // Create our playing area
  createCanvas(500,500);

  // Put the avatar in the centre
  avatarX = width/2;
  avatarY = height/2;

  // Put the enemy to the left at a random y coordinate within the canvas
  enemyX = 0;
  enemyY = random(0,height);

  // No stroke so it looks cleaner
  noStroke();

  ///////////////////////// Start New /////////////////////////////////

  // Adding a new font
  textFont(myFont);

  // The text size
  textSize(20);

  // Text alignment
  textAlign(CENTER,CENTER);

  //////////////////////// End New ///////////////////////////////////
}

// draw()
//
// Handle moving the avatar and enemy and checking for dodges and
// game over situations.
function draw() {
//////////////////////////// Start New ////////////////////////////////

  // A pink background
  //background(255,220,220);

  // A gray background that will change color
  background(red,green,blue);

////////////////////////// End New ////////////////////////////////////
  ////////////////////////////// Start New ////////////////////////////

  // Write a new text in front
  // (Balls dodged)
  text(ballDodge,width-400, height-480 );

  // Write a new text in front right
  // (Balls hit)
  text(ballHit, width-100, height-480);

  // Display the number balls dodged
  text(dodges,width-400, height-430);

  // Display the number balls hit
  text(hit, width-100, height -430);



  //////////////////////////// End New ////////////////////////////////

  // Default the avatar's velocity to 0 in case no key is pressed this frame
  avatarVX = 0;
  avatarVY = 0;

  ///////////////////////// Start New //////////////////////////////////
  // If the avatar doesn't move, the avatar's color remains black
  // by default
  avatarR = 0;
  avatarG = 0;
  avatarB = 0;
// If the avatar doesn't move, the avatar's size remains 50 by default
  avatarSize = 50;

  //////////////////////// End New /////////////////////////////////////

  // Check which keys are down and set the avatar's velocity based on its
  // speed appropriately

  // Left and right
  if (keyIsDown(LEFT_ARROW)) {
    avatarVX = -avatarSpeed;
  //////////////////////// Start New ///////////////////////////////////
  // These variables changes the background colors
  red = red + 25;
  green =green - 0;
  blue = blue - 0;

  //if the avatar moves left, the color turns blue
  avatarB = 255;

  // if the avatar moves, the size changes
  avatarSize = 55;

  //////////////////////// End New /////////////////////////////////////
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    avatarVX = avatarSpeed;
    //////////////////////// Start New ///////////////////////////////////
    // These variables changes the background colors
    red = red - 25;
    green =green + 0;
    blue = blue + 0;

    //if the avatar moves right, the color turns cyan blue
    avatarR = 0;
    avatarG = 255;
    avatarB = 255;

    // if the avatar moves, the size changes
    avatarSize = 55;

    //////////////////////// End New /////////////////////////////////////
  }

  // Up and down (separate if-statements so you can move vertically and
  // horizontally at the same time)
  if (keyIsDown(UP_ARROW)) {
    avatarVY = -avatarSpeed;
    //////////////////////// Start New ///////////////////////////////////
    // These variables changes the background colors
    red = red - 0;
    green =green - 0;
    blue = blue - 25;

    // if the avatar moves up, it turns green
    avatarR = 0;
    avatarG = 255;
    avatarB = 150;

    // if the avatar moves, the size changes
    avatarSize = 55;

    //////////////////////// End New /////////////////////////////////////
  }
  else if (keyIsDown(DOWN_ARROW)) {
    avatarVY = avatarSpeed;
    //////////////////////// Start New ///////////////////////////////////
    // These variables changes the background colors
    red = red + 0;
    green =green + 0;
    blue = blue + 25;

    //if the avatar moves up, it turns green
    avatarR = 0;
    avatarG = 255;
    avatarB = 150;

    // if the avatar moves, the size changes
    avatarSize = 55;

    //////////////////////// End New /////////////////////////////////////
  }

  // Move the avatar according to its calculated velocity
  avatarX = avatarX + avatarVX;
  avatarY = avatarY + avatarVY;

  // The enemy always moves at enemySpeed
  enemyVX = enemySpeed;
  // Update the enemy's position based on its velocity
  enemyX = enemyX + enemyVX;

  // Check if the enemy and avatar overlap - if they do the player loses
  // We do this by checking if the distance between the centre of the enemy
  // and the centre of the avatar is less that their combined radii
  if (dist(enemyX,enemyY,avatarX,avatarY) < enemySize/2 + avatarSize/2) {
    // Tell the player they lost
    console.log("YOU LOSE!");
    // Reset the enemy's position
     enemyX = 0;
     enemyY = random(0,height);

    // Reset the avatar's position
    avatarX = width/2;
    avatarY = height/2;



    // Reset the dodge counter
    dodges = 0;

    //////////////////////////// Start New ///////////////////////////////

    //Show the amount of the ball hits the player
    hit = hit + 1;

    // If player loses, everything resets
    dodge = 0;
    hits = 0;

    // If the player gets hit
    red = 155;
    green =155;
    blue = 155;

    //////////////////////////// End New /////////////////////////////////
  }

  // Check if the avatar has gone off the screen (cheating!)
  if (avatarX < 0 || avatarX > width || avatarY < 0 || avatarY > height) {
    // If they went off the screen they lose in the same way as above.
    console.log("YOU LOSE!");
    enemyX = 0;
    enemyY = random(0,height);
    avatarX = width/2;
    avatarY = height/2;
    dodges = 0;
    ///////////////////////// Start New /////////////////////////////////

    // If the the player goes of bounds the hit counter resets
    hit = 0;


    //////////////////////// End New ////////////////////////////////////
  }

  // Check if the enemy has moved all the way across the screen
  if (enemyX > width) {
    // This means the player dodged so update its dodge statistic
    dodges = dodges + 1;
    // Tell them how many dodges they have made
    console.log(dodges + " DODGES!");
    // Reset the enemy's position to the left at a random height
    enemyX = 0;
    enemyY = random(0,height);
  ///////////////////////// Start New ////////////////////////////
  // if the player crosses the screen, the color resets
  red = 155;
  green =155;
  blue = 155;

  // If the enemy crosses the screen, the enemy size changes
  enemySize = enemySize + random(0,10);

  // If the enemy crosses the screen, the enemy speed changes at random
  enemySpeed = random(1,20);


  // if the enemy Speed reaches maximum speed, the enemy's speed and size
  // changes
  if(enemySpeed = 20){
  enemySize = random(50,100);
  enemySpeed = random(1,20);

  }

// if the dodge score shows 10, the speed drops by half
  if (dodges === 10) {
    avatarSpeed = 5;
  }

  //////////////////////// End New ///////////////////////////////

  }



  // Display the number of successful dodges in the console
  console.log(dodges);


//////////////////////// Start New ////////////////////////////////
  // The player is black
  // Added new variables to change avatars colors
  fill(avatarR, avatarG, avatarB);
  // Draw the player as a circle
  ellipse(avatarX,avatarY,avatarSize,avatarSize);

  // The enemy is red
  fill(255,0,0);
  // Draw the enemy as a circle
  ellipse(enemyX,enemyY,enemySize,enemySize);
////////////////////////// End New /////////////////////////////////
}

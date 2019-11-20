"use strict";

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
let numPlat = 20;

// Images asset for the game
let climbImg;
let platShortImg;
let platLongImg;
let mountainImg;

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
    let reLongY = random(0, width);

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


// draw()
//
// Description of draw()

function draw() {

}

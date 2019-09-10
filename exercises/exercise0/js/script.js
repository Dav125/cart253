// Exercise 0 - Spiritual Self-Portrait
// David Fong
// 3 September 2019
//
// Uses p5's set of shape and colour functions to draw a head
// wearing a hat that Pippin claims is spiritually just like him.


// setup()
//
// Draws a beautiful face on the canvas and puts a hat on it!

function setup() {

  // Setting up a canvas with the color that I chose

  createCanvas(500,500);
  background(100,220,100);

  // Add hair
  ellipseMode(CENTER);
  fill(0);
  ellipse(250,250,300,400);

  // Adding a square shaped head
  rectMode(CENTER);
  noStroke();
  fill(255,203,59);
  rect(250,250,200,300);

  // Adding a big chin
  rectMode(CENTER);
  noStroke();
  fill(255,203,59);
  rect(250,400,250,100);

  // Adding the two eyes
  ellipseMode(CENTER);
  fill(225);
  ellipse(205,175,50,50);
  ellipse(295,175,50,50);

  // Adding the Puppils
  fill(0);
  ellipse(205,175,25,25);
  ellipse(295,175,25,25);

  // Adding the nose
  rectMode(CENTER);
  fill(255,150,90);
  rect(250,250,25,100);


  // Adding the cheeks
  ellipseMode(CENTER);
  fill(255,180,90);
  ellipse(175,240,70,90);
  ellipse(325,240,70,90);

  // Adding the mouth
  ellipseMode(CENTER);
  fill(100,10,10);
  ellipse(250,370,90,50);


  // Adding the ears
  ellipseMode(CENTER);
  fill(255,200,90);
  ellipse(125,190,50,60);
  ellipse(375,190,50,60);

  // Add hair
  ellipseMode(CENTER);
  fill(0);
  ellipse(250,90,250,90);



}

// draw()
//
// Does nothing.

function draw() {
  // Nothing here for now.
}

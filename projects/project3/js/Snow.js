// Snow Class
//
// To make some falling snow falling in the background
class Snow {
  // Constructor
  //
  // Putting all the parametres in here
  constructor(x, y, fillColor, radius) {

    // Position
    this.x = x;
    this.y = y;
    // Velocity
    this.vx = 0;
    this.vy = 0;
    // Display properties
    this.fillColor = fillColor;
    this.radius = radius;
    // Speed
    this.speed = 0.7

    // Time properties for noise function
    // just the tx
    this.tx = random(0, 1000);

  }

  // move()
  //
  // To make the snow fall
  move() {
    // Set velocity via tx noise()
    this.vx = map(noise(this.tx), 0, 1, -this.speed, this.speed);
    // To update the position
    this.x += this.vx;
    this.y += this.vy;
    // Update the time properties
    this.tx += 0.01;
    // Handle wrapping
    this.handleWrapping();
  }

  // gravity()
  //
  // Pulling the snows down
  gravity() {

    this.vy = 0.7;

    // Handle wrapping
    this.handleWrapping();
  }

  // handleWrapping
  //
  // To check if the snows are falling off the screen
  // if it is, it'll reapear on the top
  handleWrapping() {
    // When it moves off left or right, it respawns
    if (this.x < 0) {
      this.x += width;
    } else if (this.x) {
      this.x -= width;
    }
    // When the snow goes off screen, more will come down
    if (this.y > height) {
      this.y -= height;
    }
  }

  // display
  //
  // Draw a white circle
  display() {
    push();
    noStroke();
    fill(this.fillColor);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.radius * 2);
    pop();
  }




}

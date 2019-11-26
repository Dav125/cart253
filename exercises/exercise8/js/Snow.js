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

  }

  // move()
  //
  // To make the snow fall
  move(){
    // To update the position
    this.x += this.vx;
    this.y += this.vy;
    // Handle wrapping
    this.handleWrapping();
  }

  // gravity()
  //
  // Pulling the snows down
  gravity(){

    this.vy = 1;

    // Handle wrapping
    this.handleWrapping();
  }

  // handleWrapping
  //
  // To check if the snows are falling off the screen
  // if it is, it'll reapear on the top
  handleWrapping(){
    // When the snow goes off screen, more will come down
    if (this.y > height) {
      this.y -= height;
    }
  }

  // display
  //
  // Draw a white circle
  display(){
    push();
    noStroke();
    fill(this.fillColor);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.radius * 2);
    pop();
  }




}

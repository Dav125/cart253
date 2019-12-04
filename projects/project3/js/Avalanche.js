// Avalanche Class
//
// To make some falling snow falling in the background
class Avalanche {
  // Constructor
  //
  // Putting all the parametres in here
  constructor(x, y, width, height, avalancheImg) {

    // Position
    this.x = x;
    this.y = y;
    // Velocity
    this.vx = 0;
    this.vy = 0;
    // Scale
    this.scale = 0.1;
    // Display properties
    this.width = width * this.scale;
    this.height = height * this.scale;
    // Image
    this.avalancheImg = avalancheImg;

  }

  // move()
  //
  // To make the snow fall
  move() {
    // To update the position
    this.x += this.vx;
    this.y += this.vy;
    // Handle wrapping
    this.handleWrapping();
  }

  // gravity()
  //
  // Pulling the snows down
  gravity() {

    this.vy = 2;

    // Handle wrapping
    this.handleWrapping();
  }

  // handleWrapping
  //
  // To check if the snows are falling off the screen
  // if it is, it'll reapear on the top
  handleWrapping() {
    // When the snow goes off screen, more will come down
    if (this.y > height) {
      this.y -= height;
    }
  }

  // handleCollision
  //
  // when the avalanche touches the climber, the climber falls
  handleCollision(climber){

    // distance
    //
    // to calculate the distance between the avalanche and climber
    let d = dist(this.x, this.y, climber.x, climber.y);

    // dist()
    //
    // To keep track of the avalanche and the avatar are in contact
    if (d < this.width / 2 + climber.width / 2) {

      climber.vy += 2;

    }
  }


  // display
  //
  // Draw a white circle
  display() {
    push();
    noStroke();
    imageMode(CENTER);
    image(this.avalancheImg, this.x, this.y, this.width, this.height);
    pop();
  }




}

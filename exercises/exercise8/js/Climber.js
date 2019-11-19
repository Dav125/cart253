// Climber class
//
// It is a class with the player controlling their
// moving avatar
class Climber {
  constructor(x, y, width, height, speed, climberImg, upKey, downKey, leftKey, rightKey){
    // x and y position
    this.x = x;
    this.y = y;

    // The scale of the image that is going to be used
    this.scale = 0.1;

    // Width and Height of this object class
    this.width = width * this.scale;
    this.height = height * this.scale;

    // Velocity of the object
    this.vx = 0;
    this.vy = 1;

    // The speed of the object
    this.speed = speed;

    // The climber Image
    this.climberImg = climberImg;

    // The directional keys
    this.upKey = upKey;
    this.downKey = downKey;
    this.leftKey = leftKey;
    this.rightKey = rightKey;

    // The grounded variable is to make sure
    // that the object is being detected for
    // standing in a platform
    this.grounded = false;

    // The pull variable is used
    // to pull object down just like gravity
    this.pull = 1;

  }

  //handleInput()
  //
  // The controls for the climber class
  handleInput() {
    // Horizontal movement left to right
    if (keyIsDown(this.leftKey)) {
      this.vx = -this.speed;
    } else if (keyIsDown(this.rightKey)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }

    // Jumping movement
    //
    // Also detects if the object is grounded
    // if it is, it will be able to jump
    if (keyIsDown(this.upKey) && this.grounded === true) {
      console.log("jumping");
      // The jumping power velocity
      this.vy = -20;

    }

  }
  // move()
  //
  // To allow the climber to move in the screen
  move() {
    // Update the position of the object
    this.x += this.vx;
    this.y += this.vy;

    // handleWrapping
    //
    // To link this code to handleWrapping
    this.handleWrapping();

  }

  // gravity()
  //
  // When the climber is up in the air, it has to come down
  gravity() {

    // The climber pulls to the ground
    this.vy += this.pull;


    // handle wrapping
    //
    // To link this code to handleWrapping()
    this.handleWrapping();

  }

  // handleStanding()
  //
  // To make sure that when the avatar is in contact with the platform
  // the climber will not fall
  handleStanding(platform) {
    // Variable
    //
    // Variables to calculate the distance of the climber and the platform
    let d = dist(this.x, this.y, platform.x, platform.y);

    // dist()
    //
    // To keep track of the platform and the avatar are in contact
    if (d < this.width / 2 + platform.width / 2) {
      console.log("standing");
      // this.vy
      //
      // To make sure that the climber doesn't fall
      this.grounded = true;
      this.pull = 0;
      this.vy = 0;

    }
}

  // handleWrapping()
  //
  // if the climber goes up, it goes up a level
  // if the climber falls down, the game is over
  handleWrapping() {
    if (this.y < 0) {
      // Temporary state
      //
      // For now, the game will over but for the project
      // will go to the next level
      this.x = width / 2;
      this.y = height / 2;

    } else if (this.y > height) {
      // Game Over state
      //
      // the game will go game over
      this.x = width / 2;
      this.y = height / 2;

    }
  }

  //display()
  //
  // To display the image of the avatar
  display() {
    push();
    imageMode(CENTER);
    image(this.climberImg, this.x, this.y, this.width, this.height);
    pop();

  }

}

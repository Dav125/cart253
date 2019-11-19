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


}

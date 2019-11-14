// Platform Class
//
// This is a class when all the platform are positioned

class Platform {
  // constructor()
  //
  // This is all of the parametres for the platform to be placed
  constructor(x, y, width, height, platformImg) {
    // Postion
    this.x = x;
    this.y = y;
    // Size
    // Scale of the image
    this.scale = 0.1;
    this.width = width * this.scale;
    this.height = height * this.scale;
    // Variable to display the image
    this.platformImg = platformImg;


  }


  // diplay();
  //
  // Display the platform in the background
  display() {
    push();
    imageMode(CENTER);
    image(this.platformImg, this.x, this.y, this.width, this.height);
    pop();
  }
}

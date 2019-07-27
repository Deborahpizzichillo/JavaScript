//creating rectangle with attributes
class Rectangle {
  constructor (topLeftXPos, topLeftYPos, height, width) {
      this.topLeftXPos = topLeftXPos;
      this.topLeftYPos = topLeftYPos;
      this.height = height;
      this.width = width;
  }

  //that returns true only if the current rectangle collides with otherRectangle
  collides(otherRectangle) {
      if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
          this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
          this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.height &&
          this.topLeftYPos + this.height > otherRectangle.topLeftYPos) {
          return true;
      }
  }
}

//Test the collides(otherRectangle) method by using multiple test cases.

const rectangle = new Rectangle(2,12,8,12);
const otherRectangle = new Rectangle(8,10,4,8);

console.log(rectangle);
console.log(otherRectangle);
console.log(JSON.stringify(rectangle.collides));
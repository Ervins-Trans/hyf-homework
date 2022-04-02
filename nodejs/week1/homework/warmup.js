console.log("inside warmup file");
class Circle {
  constructor(r) {
    this.radius = r;
  }
  getDiameter() {
    return this.radius * 2;
  }
  getCircumference() {
    return this.radius * 2 * Math.PI;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

let circle1 = new Circle(5);
let circle2 = new Circle(20);

console.log(circle1.getDiameter());
console.log(circle1.getCircumference());
console.log(circle1.getArea());

console.log(circle2.getDiameter());
console.log(circle2.getCircumference());
console.log(circle2.getArea());

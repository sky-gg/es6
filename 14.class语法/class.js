// ES5
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Point.prototype.toString = function() {
//   return `(${this.x},${this.y})`
// }

// let p = new Point(3, 4)
// console.log(p)

// ES6

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `(${this.x},${this.y})`
  }
}
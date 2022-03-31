"use strict";
console.log("ScriptJS is on");
// finding canvas and making it bit nicer
const canv = document.getElementById("cirPlay");
canv.style = "display: flex; background-color: #FFF; margin: 0 auto 0;";
//must note that this width and height is different from style.width/maxwidth. which is interesting.
canv.width = window.innerWidth;
canv.height = window.innerHeight;
// set canvas to full size of window. Note *{ } in css, that removes default margin and padding from elements that have it, including body.
// the screen.availWidth or width are options, I chose this as it makes a tiny bit more sense to me.

// w3schools copypasta - drawing a random circle and toying with it a bit

let draw2d = canv.getContext("2d");
let cx = canv.width / 2;
let cy = canv.height / 2;
console.log(cx, cy); // slap the circle to centre of canvas, and check in console if the numbers seem right.
draw2d.beginPath();
draw2d.arc(cx, cy, 125, 0, 2 * Math.PI);
draw2d.fillStyle = "#ACD";
draw2d.fill();
draw2d.stroke();

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    (this.x = x),
      (this.y = y),
      (this.r = r),
      (this.startAngle = startAngle),
      (this.endAngle = endAngle),
      (this.fillColor = fillColor);
  }
  draw() {
    draw2d.beginPath();
    draw2d.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    draw2d.fillStyle = this.fillColor;
    draw2d.fill();
    draw2d.stroke();
  }
}
// Draws a boring black circle in the top left corner. Uncomment for testing.

// const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
// c1.draw();

function randomCircle() {
  let cirx = Math.floor(Math.random() * canv.width); // x position between 0 and canvas width.
  let ciry = Math.floor(Math.random() * canv.height); // y position between 0 and canvas height.
  let cirr = Math.floor(Math.random() * 100); // just a random radius between 0 and 100
  let cirFillCol = "#" + Math.floor(Math.random() * 0xffffff).toString(8); // CSS - Tricks is our lord and savior. .tostring values between 2 and 36. 16 returns a number
  // in a correct hexadecimal format. 8 and 10 is a makeshift options to get a bit nicer colors and transparencies.
  const c = new Circle(cirx, ciry, cirr, 0, 2 * Math.PI, cirFillCol);
  c.draw();
  return cirFillCol;
}

function drawCirclesWithInterval() {
  setInterval(() => {
    randomCircle();
  }, 100); // activates drawing function, every 100ms
}
// executes the function above (drawCirclesWithInterval), uncomment to test.
// drawCirclesWithInterval();

// mouseCircle and a little upgrade

function throttle(callback, limit) {
  let wait = false;
  return function () {
    if (!wait) {
      callback.apply(null, arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}

canv.addEventListener(
  "mousemove",
  throttle(function (event) {
    let cirx = event.clientX; // x of the mouse if it moves
    let ciry = event.clientY; // y of the mouse if it moves
    let cirr = 25 + Math.floor(Math.random() * 50); // just a random radius between 25 and 75
    let cirFillCol = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    const c = new Circle(cirx, ciry, cirr, 0, 2 * Math.PI, cirFillCol);
    c.draw();
  }, 50) // throttle delay, 50ms
);

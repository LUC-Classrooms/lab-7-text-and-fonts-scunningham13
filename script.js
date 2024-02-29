/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("times new roman");
}

function draw() {
  background(200);
  textSize(16);
  text("life moves pretty fast, if you don't stop and look around once in a while...", 20, 60);
 if (mouseIsPressed) 
  text("you could miss it.  - Ferris Bueller", 20, 160);
}

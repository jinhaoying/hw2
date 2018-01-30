//a. 
//center of a canvas of size (340,340) is (170,170)

function setup() {
  createCanvas(340, 340);
}
function draw() {
  line(170, 170, random(width), random(height));
}

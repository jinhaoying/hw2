//b.
//range of x should be between 170 and 340. range of y should be between 0 and 170.
//the random feature chooses values between the first inputted value and the second inputted value, inclusive

//assuming that "end point" means "the latter endpoint that is not the 'start point'", the code would be:
function setup() {
  createCanvas(340, 340);
}
function draw() {
  line(random(width), random(height), random(170,340), random(0,170));
}

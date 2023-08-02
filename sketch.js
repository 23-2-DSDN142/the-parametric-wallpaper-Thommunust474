// setup - run once when the code is first starts
function setup() {
  createCanvas(200, 200); // this sets the size of the area in which we can draw things
  background(170);
}

// draw - this function loops, the code within read through repeatedly while running
function draw() {

  let headX = 100; // link to head location X
  let headY = 100; // link to head location Y
  let headW = 83; // link to head width
  let headH = 99; // link to head height

  let snoutY = headY - 8; // link to snout location Y
  let snoutW = headW - 48; // link to snout width
  let snoutH = headH - 41; // link to snout height

  // Calculate original nostril positions
  let leftNostrilX = headX - snoutW / 3;
  let rightNostrilX = headX + snoutW / 3;
  let nostrilY = snoutY + snoutH / 6;

  // Calculate nostril size based on snout dimensions
  let nostrilW = snoutW / 4;
  let nostrilH = snoutH / 8;

  let eyeY = headY - 15;

  // Clear the canvas
  background(170);

  // Draw ears
  fill(128, 100, 100);
  ellipse(75, 65, 20, 27); // Left ear
  ellipse(125, 65, 20, 27); // Right ear

  // Draw capybara head
  fill(160, 120, 90); // Light brown
  stroke(20); // Dark brown
  ellipse(headX, headY, headW, headH);

  // Draw eyes
  fill(0); // Black eyes
  stroke(40);
  ellipse(headX - 34, eyeY, 10, 12); // Left eye
  ellipse(headX + 34, eyeY, 10, 12); // Right eye

  // Draw eyelids
  fill(120, 100, 75); // Light brown eyelids
  stroke(30);
  arc(66, 82, 11, 8, PI, 0); // Left eyelid
  arc(134, 82, 11, 8, PI, 0); // Right eyelid

  // Draw snout
  stroke(30);
  fill(128, 100, 90);
  var cornerRadius = 16;
  rect(100 - snoutW / 2, snoutY, snoutW, snoutH, cornerRadius);

  // Draw nostrils
  fill(0); // Black nostrils
  stroke(30);

  // Left nostril
  ellipse(leftNostrilX, nostrilY, nostrilW, nostrilH);

  // Right nostril
  ellipse(rightNostrilX, nostrilY, nostrilW, nostrilH);

  // Draw mouth detail
  fill(10);
  stroke(20);
  triangle(100, 145, 100.5, 130, 99.5, 130);
  triangle(100, 133, 102, 130, 98, 130);

  // Draw mouth
  fill(10);
  stroke(20);
  arc(headX, snoutY + 49, snoutW / 1.3, snoutH / 3.6, 0.2, PI - 0.2); // Curved mouth

  // Draw whiskers
  stroke(20);
  line(headX - 25, headY + 15, headX - 45, headY + 15);
  line(headX - 25, headY + 20, headX - 45, headY + 25);
  line(headX - 25, headY + 25, headX - 45, headY + 35);
  line(headX + 25, headY + 15, headX + 45, headY + 15);
  line(headX + 25, headY + 20, headX + 45, headY + 25);
  line(headX + 25, headY + 25, headX + 45, headY + 35);
}

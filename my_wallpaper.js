//your parameter variables go here!
  let headsize = 83;
  let snoutsize = 36;
  let earsize = 85;
  let eyesize = 90; 
  let nostrilSize = 8;
  let watermelonSize = 80;
  watermelon = false;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 175;
  pWallpaper.grid_settings.cell_height = 175;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {

  if (watermelon == false){
    background(187, 63, 63)
  }
  else{
    background(120, 190, 190); //light honeydew green colour
  }
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  let headX = 75;
  let headY = 75;
  let snoutY = headY - 8; // link to snout location Y
  let eyeY = headY - 15;
  // Nostril - snout
  let leftNostrilX = headX - snoutsize / 2.8;
  let rightNostrilX = headX + snoutsize / 2.8;
  let nostrilY = snoutY + snoutsize / 3.2;
  
  if (watermelon == true){
  // Draw watermelon slice
  fill(35, 140, 30); // Green
  arc(headX + 40, headY + 55, watermelonSize, watermelonSize, PI - 20, -195, PIE);
  
  fill(255, 30, 0); // Red
  arc(headX + 40, headY + 55, watermelonSize-10, watermelonSize-10, PI - 20, -195, PIE);
}

  // Draw ears
  if (watermelon == false){
    fill(160, 80, 60)
  }
  else{
    fill(128, 100, 100);
  }
  ellipse(headX - 25, headY - 35, earsize / 4, earsize / 3.2); // Left ear
  ellipse(headX + 25, headY - 35, earsize / 4, earsize / 3.2); // Right ear

  // Draw capybara head
  if (watermelon == false){
    fill(160, 60, 60)
  }
  else{  fill(160, 120, 90); // Light brown
}
  stroke(20); // Dark brown
  ellipse(headX, headY, headsize, headsize / 0.84);

  // Draw eyes
  fill(0); // Black eyes
  stroke(40);
  ellipse(headX - 34, eyeY, eyesize / 8.2, eyesize / 7.5); // Left eye
  ellipse(headX + 34, eyeY, eyesize / 8.2, eyesize / 7.5); // Right eye

  // Eyelids
  if (watermelon == false){
    fill(100, 40, 40)
  }
  else{
    fill(120, 100, 75); // Light brown eyelids
  }
  stroke(40);
  let cornereyelidRadius = headsize / 30;
  
  rect(headX - 35 - headsize / 16, headY - 22, eyesize / 8, eyesize / 16, cornereyelidRadius); // Left eyelid
  rect(headX + 35 - headsize / 16, headY - 22, eyesize / 8, eyesize / 16, cornereyelidRadius); // Right eyelid

  // Draw snout
  stroke(30);
  if (watermelon == false){
    fill(160, 80, 60)
  }
  else{
    fill(128, 100, 90);
  }
  var cornerRadius = 16;
  rect(headX - snoutsize / 2, snoutY, snoutsize, snoutsize * 1.6, cornerRadius);

  // Draw nostrils
  fill(0); // Black nostrils
  stroke(30);
  ellipse(leftNostrilX, nostrilY, nostrilSize, nostrilSize/ 1.2); //Left
  ellipse(rightNostrilX, nostrilY, nostrilSize, nostrilSize/ 1.2); // Right

  // Draw mouth detail
  fill(10);
  stroke(20);
  rect(headX, headY + 32, 0.5, 10);
  triangle(headX, headY + 33, headX + 3, headY + 28, headX - 3, headY + 28);

  // Draw mouth
  fill(10);
  stroke(20);
  arc(headX, snoutY + 49, snoutsize / 1.4, snoutsize / 2.6, PI + 0.2, 56 * PI - 0.2); // Curved mouth

  // Draw whiskers
  stroke(20);
  line(headX - 25, headY + 15, headX - 45, headY + 15);
  line(headX - 25, headY + 20, headX - 45, headY + 25);
  line(headX - 25, headY + 25, headX - 45, headY + 35);
  line(headX + 25, headY + 15, headX + 45, headY + 15);
  line(headX + 25, headY + 20, headX + 45, headY + 25);
  line(headX + 25, headY + 25, headX + 45, headY + 35);

  // watermelon eyebrows
  stroke(40);
  if (watermelon == false){
    strokeWeight(2)
    line(headX - 40, headY -30, headX - 25, headY - 20)
    line(headX + 40, headY -30, headX + 25, headY - 20)
    strokeWeight(1)
  }
  
  else{
    line(headX - 25, headY + 15, headX - 45, headY + 15)
  }
   
}

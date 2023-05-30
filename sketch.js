let pixelSize = 17; // Size of each pixel
let canvasWidth = 600; // Width of the canvas
let canvasHeight = 600; // Height of the canvas

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(255); // Set the background color to white
}

function draw() {
  // No need to draw anything continuously in this example
}

function mouseClicked() {
  let pixelX = mouseX - (mouseX % pixelSize); // Get the x-coordinate of the clicked pixel
  let pixelY = mouseY - (mouseY % pixelSize); // Get the y-coordinate of the clicked pixel

  let pixelColor = color(random(255), random(255), random(255)); // Generate a random color
  fill(pixelColor); // Set the fill color to the random color
  noStroke(); // Remove the stroke

  // Draw a rectangle representing the clicked pixel
  rect(pixelX, pixelY, pixelSize, pixelSize);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('my_canvas', 'png'); // Save the canvas as a PNG image with the filename 'my_canvas.png'
  }
}

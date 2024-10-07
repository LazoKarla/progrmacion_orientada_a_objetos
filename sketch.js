let posX, posY;
let velX, velY;
let diametro;
let radio;
let bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(random(100, 200), random(150), random(100));

  radio = ceil(random(50, 80));
  diametro = radio * 2;
  // console.log(diametro);
  posX = random(radio, width - radio);
  posY = random(radio, height - radio);

  // velX = random(-10, 10);
  velX = 7;
  velY = 7;
}

function draw() {
  background(bgColor);
  fill(255);
  noStroke();

  posX += velX;
  posY += velY;

  if (posX > width - radio) {
    velX *= -1;
    bgColor = color(random(100, 200), random(150), random(100));
  }

  if (posX < radio) {
    velX *= -1;
    bgColor = color(random(100, 200), random(150), random(100));
  }

  if (posY > height - radio) {
    velY *= -1;
    bgColor = color(random(100, 200), random(150), random(100));
  }

  if (posY < radio) {
    velY *= -1;
    bgColor = color(random(100, 200), random(150), random(100));
  }

  circle(posX, posY, diametro);
}

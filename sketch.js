let bgColor;
let pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(random(100, 200), random(150), random(100));
  for (let i = 0; i < 100; i++) {
    let nuevaPelota = new Pelota();
    pelotas.push(nuevaPelota);
  }
}

function draw() {
  background(bgColor);
  // Recorre cada pelota en el array pelotas
  for (let i = 0; i < pelotas.length; i++) {
    pelotas[i].update(); // Actualiza la posición de cada pelota
    pelotas[i].display(); // Muestra cada pelota
  }
}

class Pelota {
  constructor() {
    this.radio = ceil(random(5, 30));
    this.diametro = this.radio * 2;
    this.posX = random(this.radio, width - this.radio);
    this.posY = random(this.radio, height - this.radio);
    this.velX = random(-10, 10);
    this.velY = random(-10, 10);
    console.log("estoy viva");
  }

  // Actualiza la posición de la pelota
  update() {
    this.posX += this.velX;
    this.posY += this.velY;

    if (this.posX > width - this.radio || this.posX < this.radio) {
      this.velX *= -1;
    }

    if (this.posY > height - this.radio || this.posY < this.radio) {
      this.velY *= -1;
    }
  }

  // Dibuja la pelota
  display() {
    fill(255);
    noStroke();
    circle(this.posX, this.posY, this.diametro);
  }
}

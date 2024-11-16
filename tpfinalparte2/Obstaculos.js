class Obstaculo {
  constructor(x, y, velocidad, tipo) {
    this.x = x;
    this.y = y;
    this.velocidad = velocidad;
    this.tipo = tipo; // Puede ser "auto" o "basura"
    this.tamano = this.tipo === "auto" ? 80 : 60;
  }

  mostrar() {
    if (this.tipo === "auto") {
      image(imgAuto, this.x, this.y, this.tamano, this.tamano);
    } else if (this.tipo === "basura") {
      image(imgBasura, this.x, this.y, this.tamano, this.tamano);
    }
  }

  mover() {
    this.y += this.velocidad;
    if (this.y > height) this.reset();
  }


  reset() {
    this.y = random(-200, -50);
    if (this.tipo === "auto") {
      this.x = random(110, 150);
    } else if (this.tipo === "basura") {
      this.x = random(420, 450);
    }
  }
}

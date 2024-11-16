class Personaje {
  constructor(posX, posY, imagenDerecha, imagenIzquierda) {
    this.posX = posX;
    this.posY = posY;
    this.imagenDerecha = imagenDerecha;
    this.imagenIzquierda = imagenIzquierda;
    this.imagenActual = this.imagenDerecha;
    this.ancho = 80;
    this.alto = 80;
  }

  dibujar() {
    image(this.imagenActual, this.posX, this.posY, this.ancho, this.alto);
  }

  moverDerecha() {
    this.posX += 10;
    if (this.posX > width - this.ancho) {
      this.posX = width - this.ancho;
    }
    this.imagenActual = this.imagenDerecha;
  }

  moverIzquierda() {
    this.posX -= 10;
    if (this.posX < 0) {
      this.posX = 0;
    }
    this.imagenActual = this.imagenIzquierda;
  }

  moverArriba() {
    this.posY -= 10;
    if (this.posY < 0) {
      this.posY = 0;
    }
  }

  moverAbajo() {
    this.posY += 10;
    if (this.posY > height - this.alto) {
      this.posY = height - this.alto;
    }
  }

  colisiona(obstaculo) {
    const colisionX = this.posX < obstaculo.x + obstaculo.tamano &&
      this.posX + this.ancho > obstaculo.x;
    const colisionY = this.posY < obstaculo.y + obstaculo.tamano &&
      this.posY + this.alto > obstaculo.y;

    return colisionX && colisionY;
  }
}

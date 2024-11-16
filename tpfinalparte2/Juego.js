class Juego {
  constructor() {
    this.personaje = new Personaje(width / 2, height - 100, NatanD, NatanI);
    this.obstaculos = [];
    this.vidas = 3;
    this.finJuego = false;
    this.ganaste = false;
    this.crearObstaculos();
  }

  crearObstaculos() {
    for (let i = 0; i < 2; i++) {
      const x = random(110, 150);
      const y = random(-200, -50);
      const velocidad = random(2, 3);
      this.obstaculos.push(new Obstaculo(x, y, velocidad, "auto"));
    }

    for (let i = 0; i < 2; i++) {
      const x = random(420, 450);
      const y = random(-200, -50);
      const velocidad = random(1, 3);
      this.obstaculos.push(new Obstaculo(x, y, velocidad, "basura"));
    }
  }

  verificarGanar() {
    if (
      this.personaje.posX <= 0 ||
      this.personaje.posX >= width - this.personaje.ancho
      ) {
      this.ganaste = true;
    }
  }

  mostrar() {
    if (this.ganaste) {
      this.mostrarGanaste();
      return;
    }

    if (this.finJuego) {
      this.mostrarFin();
      return;
    }

    image(imgFondo, 0, 0, width, height);

    // Dibujar personaje
    this.personaje.dibujar();

    // Dibujar y mover obstáculos
    for (let obstaculo of this.obstaculos) {
      obstaculo.mostrar();
      obstaculo.mover();

      if (this.personaje.colisiona(obstaculo)) {
        this.vidas--;
        obstaculo.reset();

        if (sonido && sonido.isLoaded()) {
          sonido.play();
        }

        if (this.vidas <= 0) {
          this.finJuego = true;
        }
      }
    }

    // Mostrar vidas
    fill(255, 0, 0);
    textSize(20);
    text("Vidas: " + this.vidas, 50, 50);

    // Verificar si ganó
    this.verificarGanar();
  }

  mostrarGanaste() {
    image(Ganaste, 0, 0, width, height);
    fill(0, 150);
    rect(0, 0, width, height);

    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("¡Ganaste!", width / 2, height / 2);

    fill(200);
    textSize(20);
    text("Haz clic para volver al menú", width / 2, height / 2 + 50);

    if (mouseIsPressed) {
      pantallaPrincipal.pantallaActual = "menu";
    }
  }

  mostrarFin() {
    image(Perdiste, 0, 0, width, height);
    fill(0, 150);
    rect(0, 0, width, height);

    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Perdiste", width / 2, height / 2);

    fill(200);
    textSize(20);
    text("Haz clic para volver al menú", width / 2, height / 2 + 50);

    if (mouseIsPressed) {
      pantallaPrincipal.pantallaActual = "menu";
    }
  }
}

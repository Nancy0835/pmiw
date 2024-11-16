class Principal {
  constructor() {
    this.pantallaActual = "menu";
    this.juego = new Juego();
    this.creditos = new Creditos();
    this.instrucciones = new Instrucciones();
  }

  mostrar() {
    if (this.pantallaActual === "menu") {
      this.mostrarMenu();
    } else if (this.pantallaActual === "juego") {
      this.juego.mostrar();
    } else if (this.pantallaActual === "creditos") {
      this.creditos.mostrar();
    } else if (this.pantallaActual === "instrucciones") {
      this.instrucciones.mostrar();
    }
  }

  mostrarMenu() {
    image(FondoMenu, 0, 0, width, height);
    fill(255); // Color de texto
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Uncharted", width / 2, 100);

    textSize(24);
    text("Jugar", width / 2, 200);
    text("Instrucciones", width / 2, 300);
    text("Créditos", width / 2, 400);
  }

  click() {
    if (this.pantallaActual === "menu") {
      if (mouseY > 180 && mouseY < 220) {
        this.pantallaActual = "juego";
        this.juego = new Juego(); // Reinicia el juego
      } else if (mouseY > 280 && mouseY < 320) {
        this.pantallaActual = "instrucciones";
      } else if (mouseY > 380 && mouseY < 420) {
        this.pantallaActual = "creditos";
      }
    } else if (this.pantallaActual === "juego" && this.juego.finJuego) {
      this.pantallaActual = "menu"; // Vuelve al menú principal
    } else if (this.pantallaActual === "creditos" || this.pantallaActual === "instrucciones") {
      this.pantallaActual = "menu";
    }
  }
}

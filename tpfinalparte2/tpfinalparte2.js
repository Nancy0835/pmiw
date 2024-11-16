//TP#Final — Aventura Gráfica Interactiva Web [Etapa 1] Comisión 5
//Nancy Breit legajo 120390/7
//Milagro Anahi Ruiz 88221/8
// video: https:
let imgFondo, imgAuto, imgBasura, NatanD, NatanI, FondoMenu, Perdiste, Ganaste;
let sonido;
let pantallaPrincipal;

function preload() {
  imgFondo = loadImage('data/fondo.jpg');
  imgAuto = loadImage('data/auto.png');
  imgBasura = loadImage('data/basura.png');
  NatanD = loadImage('data/aSully.png');
  NatanI = loadImage('data/aElena.png');
  FondoMenu = loadImage('data/foto.png');
  Perdiste = loadImage('data/foto2.png');
  Ganaste= loadImage('data/foto1.png');
  sonido = loadSound('data/blup.mp3');
}

function setup() {
  createCanvas(640, 480);
  pantallaPrincipal = new Principal();
}

function draw() {
  pantallaPrincipal.mostrar();
}

function mousePressed() {
  pantallaPrincipal.click();
}

function keyPressed() {
  if (pantallaPrincipal.pantallaActual === "juego") {
    if (keyCode === RIGHT_ARROW) {
      pantallaPrincipal.juego.personaje.moverDerecha();
    } else if (keyCode === LEFT_ARROW) {
      pantallaPrincipal.juego.personaje.moverIzquierda();
    } else if (keyCode === UP_ARROW) {
      pantallaPrincipal.juego.personaje.moverArriba();
    } else if (keyCode === DOWN_ARROW) {
      pantallaPrincipal.juego.personaje.moverAbajo();
    }
  }
}

//TP1
//COMISION 5
// Profesor: Tobías Albirosa
// Nancy Breit, LEGAJO: 120390/7
// Youtube: https://youtu.be/MQxrrFmTVXg

let j, i;
let alto;
let ancho;
let cantidadCuad = 24; // Grilla
let sinGrilla = false; // Función desactiva la grilla
let efectoFocalDesactivado = true; // Función que desactiva el efecto focal con la tecla r
let Bridget;

function preload() {
  // Preload the image to make sure it is loaded before setup
  Bridget = loadImage("data/BridgetRiley.jpg");
}

function setup() {
  createCanvas(800, 400);
  alto = 800 / 24;
  ancho = 800 / 24;
  
  // Muestra la grilla sin efecto al iniciar
  sinEfectoFocal(true); 
  
  // Redimensiona la imagen op art y la ajusta a la izquierda.
  Bridget.resize(width / 2, 0);
}

function draw() {
  // Dibuja la imagen en la mitad izquierda
  image(Bridget, 0, 0, 400, 400);
}

// Dibuja la grilla a la derecha
function sinEfectoFocal(efecto) {
  background(255);
  
  // Ciclo anidado para dibujar la grilla
  for (let i = 0; i < cantidadCuad; i++) {
    for (let j = 0; j < cantidadCuad; j++) {
      if ((i + j) % 2 != 0) {
        fill(255); // blanco
      } else {
        fill(0); // negro
        rect(i * alto + 400, j * ancho, alto, ancho);
      }
    }
  }
}

// Evento del mouse: activa el efecto focal al presionar el mouse
function mousePressed() {
  for (let i = 0; i < cantidadCuad; i++) {
    for (let j = 0; j < cantidadCuad; j++) {
      if ((i + j) % 2 != 0) {
        fill(255); // blanco
        rect(i * alto + 700, j * ancho, alto, ancho);
        alto =-5;
         } else {
        fill(0); // negro
        rect(i * alto + 700, j * ancho, alto, ancho);
        alto = -5;
      }
      }  
    } 


}

// Evento del teclado: resetea todo si se presiona la tecla 'r' o 'R'
function keyPressed() {
  if (key == 'r' || key == 'R') {
    sinGrilla = false;
    sinEfectoFocal(true);
  }
}

//TP1
//COMISION 5
// Profesor: Tobías Albirosa
// Nancy Breit, LEGAJO: 120390/7
// Youtube: https://youtu.be/MQxrrFmTVXg

let j, i;
let alto;
let ancho;
let cantidadCuad;  //Grilla
let stroke;
let sinGrilla = (x, y) => {
  if (x <= y) {
    return  false
  } else {
    return true
  }
}

function preload () {
  loadImage ('assets/BridgetRiley.jpg');
}
function setup() {
  createCanvas(800, 400);
  let alto = 400 /3;
  let ancho = 800 /3;
  let cantidadCuad = 24; //Grilla
}

function draw() {
  background (255);
}
for (let i = 0; i < cantidadCuad; i++) {  // ciclo for
  for (let j = 0; j < cantidadCuad; j++) { //estructura repetitiva anidada
    if ((i + j) % 2 != 0) {  // Condicional y operadores lógicos ! = revertir pintar b/n
      fill(255);
    } else {
      fill(0);
      rect(i * alto + 400, j * ancho, alto, ancho);
    }
  }
}

//Evento del mouse que dura un instante y aparece el efecto focal
function mousePressed () {
  for (let i = 0; i < cantidadCuad; i++) {
    for (let j = 0; j < cantidadCuad; j++) {
      if ((i + j) % 2 != 0) {
        fill(255);
        rect(i * alto + 700, j * ancho, alto, ancho);
        alto =- 5;
      } else {
        fill(0);
        rect(i * alto + 700, j * ancho, alto, ancho);
        alto =- 5;
      }
    }
  }
}

function keyPressed () {    // Borra todo al reiniciar
  if (key == 'r' || key == 'R') {
    sinGrilla = false;
  }
}

//TP1rec
//COMISION 5
// Profesor: Leandro Garay
// Nancy Breit, LEGAJO: 120390/7
// Youtube: https://www.youtube.com/watch?v=xv1JrFYWvNk

let xi, yi;
let n;
let an, al;
let cantidadCuad = 24; // Grilla función propia: con parámetro definido
let imagen;
let efectoAplicado = false; // Variable para controlar si el efecto ya se aplicó

function preload() { // cargo imagen
  imagen = loadImage("data/BridgetRiley.jpg");
}

function setup() {
  createCanvas(800, 400);
  image(imagen, 0, 0, width / 2, height);
  xi = 400; // Funciones globales con parámetro fijo
  yi = 0;
  n = 0; 
  al = 25;
  an = 25; 
  dibujarGrillaOriginal(); // Dibuja la grilla normal en el inicio
}

function draw() {}
// Función para dibujar la grilla normal sin efecto
function dibujarGrillaOriginal() {
  for (let xi = 0; xi < cantidadCuad; xi++) { 
    for (let yi = 0; yi < cantidadCuad; yi++) {
      if ((xi + yi) % 2 != 0) {
        fill(255); // blanco
      } else {
        fill(0); // negro
      }
      rect(xi * al + 400, yi * an, al, an);
    }
  }
}

// Aplica el efecto focal en la grilla una sola vez al hacer clic
function mousePressed() {
  if (!efectoAplicado) { // Verifica si el efecto ya se aplicó
    xi = 400;
    yi = 0;
    for (let i = 0; i < 16; i++) {
      // Primera sección sin efecto focal
      for (let j = 0; j < 4; j++) {
        fill(n);
        rect(xi, yi, an, al);
        if (n == 255) {n = 0} else {n = 255}
      xi += an;
      }
      // Segunda sección con efecto focal
      for (let j = 0; j < 20; j++) {
        fill(n);
        rect(xi, yi, an - j - 6, al);
       if (n == 255) {n = 0} else {n = 255}
      xi += an - j - 6;
      }
      // Tercera sección sin distorsión
      for (let j = 0; j < 9; j++) {
        fill(n);
        rect(xi, yi, 6 + j, al);
        if (n == 255) {n = 0} else {n = 255}
      xi += 6 + j;
      }
      yi += an;
      xi = 400;
    }
    efectoAplicado = true; // Cambia el estado para indicar que el efecto ya se aplicó
  }
}

// Función para detectar cuando se presiona la tecla 'r'
function keyPressed() {
  if (key === 'r' || key === 'R') {
    background(255); // Limpia el fondo de la pantalla
    image(imagen, 0, 0, width / 2, height); // Redibuja la imagen de fondo
    dibujarGrillaOriginal(); // Redibuja la grilla original
    efectoAplicado = false; // Permite aplicar el efecto de nuevo
  }
}

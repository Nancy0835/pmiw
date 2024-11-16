//TP#Final — Aventura Gráfica Interactiva Web [Etapa 1] Comisión 5
//Nancy Breit legajo 120390/7
//Milagro Anahi Ruiz 88221/8
// video: https://www.youtube.com/watch?v=OeuZderqhlg

var pantallaActual = 0;
var pantallasTotales = 26;
var fondos = [];
let titulo, iconodevolumen, textos = [];
let musica;
let musicaActiva = false;
let sonidoApertura;
let sonidoReproduciendo = false;

function setup() {
  createCanvas(640, 480);
}

function preload() {
  cargarElementos();
  musica = loadSound('data/apertura.mp3');
  sonidoApertura = loadSound('data/apertura.mp3');
}

function cargarElementos() {
  titulo = loadImage("data/titulo.png");
  textos = loadStrings("data/textos.txt");

  for (let num = 0; num < pantallasTotales; num++) {
    fondos[num] = loadImage("data/" + num + ".png");
  }
}

function mostrarTexto(texto, x, y) {
  textSize(16);
  textAlign(CENTER, TOP);
  fill(255);
  let rectWidth = textWidth(texto) + 20;
  let rectHeight = 40;
  rect(x - rectWidth / 2, y, rectWidth, rectHeight);
  fill(0);
  text(texto, x, y);
}

function draw() {
  background(255);

  if (pantallaActual === 0) {
    mostrarPantallaInicio();
  } else if (pantallaActual === 1) {
    mostrarCreditos();
  } else if (pantallaActual >= 2 && pantallaActual < pantallasTotales) {
    mostrarImagenYTexto(pantallaActual);
  }

  // Control de sonido
  manejarSonido(pantallaActual);
}

function mostrarPantallaInicio() {
  if (fondos[pantallaActual]) {
    image(fondos[pantallaActual], 0, 0, width, height);
  }
  if (iconodevolumen) {
    image(iconodevolumen, 10, 20, 100, 100);
  }

  dibujarBoton("Iniciar", width / 2, height / 2, 150, 40);
  if (titulo) {
    image(titulo, width / 2 - titulo.width / 2, height / 2 - 40 - titulo.height);
  }
  dibujarBoton("Créditos", width / 2, height / 2 + 50, 150, 40);
}

function dibujarBoton(texto, x, y, ancho, alto) {
  fill(200);
  rect(x - ancho / 2, y - alto / 2, ancho, alto);
  fill(0);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(texto, x, y);
}

function mostrarCreditos() {
  background(0);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(" \nAlumnas: Nancy Breit y Milagro Ruiz \nComison 5 ", width / 2, height / 2 - 20);
  dibujarBoton("Volver", width / 2, height / 2 + 50, 150, 40);

  // Detener la música al mostrar los créditos
  if (musica.isPlaying()) {
    musica.stop();
    musicaActiva = false;
  }
}

function mostrarImagenYTexto(pantalla) {
  if (fondos[pantalla]) {
    image(fondos[pantalla], 0, 0, width, height);
  }

  if (textos[pantalla]) {
    mostrarTexto(textos[pantalla], width / 2, height - 100);
  }
  
  if (pantalla === 3 || pantalla === 16) {
    dibujarBotonConOpciones("SI", "NO", width / 2, height - 60, 80, 30, 20);
  } else if (pantalla === 9) {
    dibujarBotonConOpciones("Sully", "Elena", width / 2, height - 60, 80, 30, 20);
  } else if ([10, 12, 14, 15].includes(pantalla)) {
    dibujarBoton("Siguiente", width / 2, height - 60, 100, 40);
  } else if ([13, 19, 25].includes(pantalla)) {
    dibujarBoton("Reinicio", width / 2, height - 60, 100, 40);
  } else if (pantalla < pantallasTotales - 1) {
    dibujarBoton("Siguiente", width / 2, height - 60, 100, 40);
  }
}

function dibujarBotonConOpciones(textoIzquierda, textoDerecha, x, y, ancho, alto, espacio) {
  fill(200);
  rect(x - ancho - espacio / 2, y - alto / 2, ancho, alto);
  fill(0);
  text(textoIzquierda, x - ancho / 2 - espacio / 2, y);

  fill(200);
  rect(x + espacio / 2, y - alto / 2, ancho, alto);
  fill(0);
  text(textoDerecha, x + ancho / 2 + espacio / 2, y);
}

function manejarSonido(pantalla) {
  // Condiciones para reproducir o detener música en distintas pantallas
  if (pantalla === 0 && !musicaActiva) {
    musica.loop();
    musicaActiva = true;
  }
  
  if (pantalla === 2 && !sonidoReproduciendo) {
    sonidoApertura.play();
    sonidoReproduciendo = true;
  }

  // Detener el sonido de apertura después de reproducirlo una vez
  if (sonidoReproduciendo && !sonidoApertura.isPlaying()) {
    sonidoReproduciendo = false;
  }
}

function mousePressed() {
  if (pantallaActual === 0) {
    manejarInicio();
  } else if (pantallaActual === 1) {
    manejarCreditos();
  } else if (pantallaActual >= 2 && pantallaActual < pantallasTotales) {
    manejarImagenes(pantallaActual);
  }
}

function manejarInicio() {
  let iniciarAncho = 150, iniciarAlto = 40, iniciarPosY = height / 2 - iniciarAlto / 2;
  if (mouseX > width / 2 - iniciarAncho / 2 && mouseX < width / 2 + iniciarAncho / 2 &&
      mouseY > iniciarPosY && mouseY < iniciarPosY + iniciarAlto) {
    pantallaActual = 2;
  }

  let creditosPosY = iniciarPosY + iniciarAlto + 10, creditosAncho = 150;
  if (mouseX > width / 2 - creditosAncho / 2 && mouseX < width / 2 + creditosAncho / 2 &&
      mouseY > creditosPosY && mouseY < creditosPosY + 40) {
    pantallaActual = 1;
  }
}

function manejarCreditos() {
  let volverAncho = 150;
  if (mouseX > width / 2 - volverAncho / 2 && mouseX < width / 2 + volverAncho / 2 &&
      mouseY > height / 2 + 20 && mouseY < height / 2 + 20 + 40) {
    pantallaActual = 0;
  }
}

function manejarImagenes(pantalla) {
  const xCentro = width / 2;
  const yBoton = height - 60;

  if (pantalla === 16) {
    if (mouseX > xCentro - 80 - 20 / 2 && mouseX < xCentro - 20 / 2 &&
        mouseY > yBoton && mouseY < yBoton + 30) {
      pantallaActual = 20; 
    }
    if (mouseX > xCentro + 20 / 2 && mouseX < xCentro + 80 + 20 / 2 &&
        mouseY > yBoton && mouseY < yBoton + 30) {
      pantallaActual = 17; 
    }
  } 
  // Botones para reinicio en pantallas 13, 19, 25
  else if ([13, 19, 25].includes(pantalla)) {
    if (mouseX > xCentro - 100 / 2 && mouseX < xCentro + 100 / 2 &&
        mouseY > yBoton && mouseY < yBoton + 40) {
      pantallaActual = 2; 
    }
  } 
  else if (pantalla === 3) {
    if (mouseX > xCentro - 80 - 20 / 2 && mouseX < xCentro - 20 / 2 &&
        mouseY > yBoton && mouseY < yBoton + 30) {
      pantallaActual = 5; 
    }
    if (mouseX > xCentro + 20 / 2 && mouseX < xCentro + 80 + 20 / 2 &&
        mouseY > yBoton && mouseY < yBoton + 30) {
      pantallaActual = 4; 
    }
  }
  
  else if ([4, 5, 6, 7, 8].includes(pantalla)) {
    pantallaActual++; 
  } 
  else if (pantalla === 9) {
    if (mouseX > xCentro - 80 - 20 / 2 && mouseX < xCentro - 20 / 2 &&
        mouseY > yBoton && mouseY < yBoton + 30) {
      pantallaActual = 10;
    } 
    else if (mouseX > xCentro + 20 / 2 && mouseX < xCentro + 80 + 20 / 2 &&
             mouseY > yBoton && mouseY < yBoton + 30) {
      pantallaActual = 11;
    }
  } 
  else if (pantalla === 10) {
    pantallaActual = 14;
  } 
  else if (pantalla === 14) {
    pantallaActual = 15;
  } 
  else if (pantalla === 15) {
    pantallaActual = 16;
  } 
  else if (pantalla < pantallasTotales - 1) {
    pantallaActual++; 
  }
}

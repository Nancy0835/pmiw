let img = [];
let texto = [];
let soundFile;


function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(255);
  image(img[0], 0, 0, width, 400); 

  if (img[0]=== 0) {
    textSize(32);
    textAlign(CENTER);
    fill(255);
    text("Uncharted", width / 2, 50); 

    let botonX = width / 2 - 100; 
    let botonY = height - 220; 
    image(img[28], botonX, botonY, 200, 200); 
  }
  
  else if (pantallaActual === 1) {
    fill(0); 
    textSize(20);
    textAlign(CENTER);
    text("Natan y Elena encuentran un diario antiguo\ny descubren un mapa hacia el tesoro del Dorado.", width / 2, 20); 
    text("¿Deciden ir a Perú a buscarlo?", width / 2, 300); 

   
    let flechaIzquierda = 200; 
    let flechaDerecha = 340; 
    let flechaY = height - 200; 

    image(img[30], flechaIzquierda, flechaY, 100, 100); 
    image(img[29], flechaDerecha, flechaY, 100, 100); 

    fill(0);
    textSize(16);
    textAlign(CENTER);
    text("Sí", flechaDerecha + 50, flechaY + 65); 
    text("No", flechaIzquierda + 50, flechaY + 65); 
  }



  else if (pantallaActual === 5 || pantallaActual === 6) {
    fill(0); 
    textSize(20);
    textAlign(CENTER);
    text( txt [0] , width / 2, 100); 
    
    if (pantallaActual === 5) {
      text(No, width / 2, 240);
    } else {
      text(Si, width / 2, 240); 
    }

    let continuarX = width / 2 - imagenes[7].width / 2; 
    let continuarY = height - 100; 
    image(img[7], continuarX, continuarY); 
  }
}

function mousePressed() {
  let botonX = width / 2 - 100; 
  let botonY = height - 220; 

  
  if (pantallaActual === 0 && mouseX > botonX && mouseX < botonX + 200 &&
      mouseY > botonY && mouseY < botonY + 200) {
    pantallaActual = 1; 
  }

  
  if (pantallaActual === 1) {
    let flechaIzquierdaX = 200; 
    let flechaDerechaX = 340; 
    let flechaY = height - 200; 

    if (mouseX > flechaDerechaX && mouseX < flechaDerechaX + 100 &&
        mouseY > flechaY && mouseY < flechaY + 100) {
      pantallaActual = 6; 
    }
    if (mouseX > flechaIzquierdaX && mouseX < flechaIzquierdaX + 100 &&
        mouseY > flechaY && mouseY < flechaY + 100) {
      pantallaActual = 5; 
    }
  }
}

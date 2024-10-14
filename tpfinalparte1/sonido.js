function preload() {
  soundFormats('mp3');
  soundFile = loadSound('data/apertura.mp3');
}
function mouseReleased() {
  if(!soundFile.isPlaying())
    soundFile.play();
}

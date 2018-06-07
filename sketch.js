var videoInicial;
var videoCancion;
var song;
var videoPlay = true;
var gameStart = false;

function preload() {
  videoInicial = createVideo("assets/videoInicial.mp4");
  videoCancion = createVideo("assets/videoCancion.mp4");
  song = loadSound("assets/song.mp3");
}

function setup() {
  createCanvas(1920, 720);
  videoInicial.loop();
  videoInicial.hide();
  videoCancion.loop();
  videoCancion.hide();
  song.loop;
  imageMode(CENTER);
}

function draw() {
  
  if (videoPlay === true) {
    image(videoInicial, width/2, height/2);
  }
  
  if (gameStart === true) {
    image(videoCancion, width/2, height/2);
  }
}

function mouseClicked() {
videoPlay = false;
gameStart = true;

}
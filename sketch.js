//Variables Videos
var circle1PosX;
var circle1PosY;

var diameter = 500;
var angle = 0;
var smallDiameter = 10;

var videoInicial;
var videoCancion;
var song;

var songPlay = false;
var videoPlay = true;
var gameStart = false;

function preload() {
  videoInicial = createVideo("assets/video1.mp4");
  videoCancion = createVideo("assets/video2.mp4");
  song = loadSound("assets/song.mp3");
}

function setup() {
  //Setup Video
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  videoInicial.loop();
  videoInicial.hide();
  videoCancion.loop();
  videoCancion.hide();
  song.loop();
  circle1PosX = windowWidth/2;
  circle1PosY = windowHeight/2;
}

function draw() {
  background(0);
  var d1 = smallDiameter + (sin(angle) * diameter / 2) + diameter / 2;
  noFill();
  strokeWeight(5);
  stroke(255, 0, 0);

  if (videoPlay) {
    image(videoInicial, windowWidth / 2, windowHeight / 2);
    song.setVolume(0);
    ellipse(circle1PosX, circle1PosY, d1, d1);
  }

  if (gameStart) {
    image(videoCancion, windowWidth / 2, windowHeight / 2);
    if (!songPlay) {
      song.jump(0);
      songPlay = true;
    }
    song.setVolume(1);
  }


  angle += 0.05;
  
  print(windowWidth + "X" + windowHeight);
}

function mouseClicked() {
  if (mouseX > (circle1PosX - diameter / 2) && mouseX < (circle1PosX + diameter / 2) && mouseY > (circle1PosY - diameter / 2) && mouseY < (circle1PosY + diameter / 2)) {
    videoPlay = false;
    gameStart = true;

  }


}
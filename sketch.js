//Variables Videos
var videoInicial;
var videoCancion;
var song;

var songPlay = false;
var videoPlay = true;
var gameStart = false;

/*
//Variables Song

var playSong = false;

//Variables Circle
var circle1PosX = 500;
var circle1PosY = 500;

var circle2PosX = 1200;
var circle2PosY = 300;

var diameter = 50;
var angle = 0;
var smallDiameter = 60;
*/

function preload() {
  videoInicial = createVideo("assets/video1.mp4");
  videoCancion = createVideo("assets/video2.mp4");
  song = loadSound("assets/song.mp3");
}

function setup() {
  //Setup Video
  createCanvas(1920, 720);
  imageMode(CENTER);
  videoInicial.loop();
  videoInicial.hide();
  videoCancion.loop();
  videoCancion.hide();
  song.loop();

  /*
  //Setup Circle
  noFill();
  strokeWeight(5);
  stroke(255, 204, 0);

  //Setup Music
*/
}

function draw() {
  background(0);

  if (videoPlay) {
    image(videoInicial, width / 2, height / 2);
    song.setVolume(0);
  }

  if (gameStart) {
    image(videoCancion, width / 2, height / 2);
    if (!songPlay) {
    song.jump(0);
    songPlay = true;
    }
    song.setVolume(1);
    
  }
  
  print (gameStart);

  /*
  var d1 = smallDiameter + (sin(angle) * diameter / 2) + diameter / 2;
  if (videoInicial === true) {
    image(video2, 0, 0);
    ellipse(circle1PosX, circle1PosY, d1, d1);
  } else {
    songPlay();
    if (playVideo2 === true) {
      image(video, 0, 0);
    }



    ellipse(circle2PosX, circle2PosY, d1, d1);
    angle += 0.05;
  }
  print("VIDEO " + videoInicial);
  print("VIDEO2 " + playVideo2);
  */
}

function mouseClicked() {
  videPlay = false;
  gameStart = true;
  /*if (mouseX > (circle1PosX - diameter / 2) && mouseX < (circle1PosX + diameter / 2) && mouseY > (circle1PosY - diameter / 2) && mouseY < (circle1PosY + diameter / 2)) {
    videoInicial = false;

  if (mouseX > (circle1PosX-diameter/2) && mouseX < (circle1PosX+diameter/2) && mouseY > (circle1PosY-diameter/2) && mouseY < (circle1PosY+diameter/2)) {
    Play1();
    

  }

  if (mouseX > (circle2PosX - diameter / 2) && mouseX < (circle2PosX + diameter / 2) && mouseY > (circle2PosY - diameter / 2) && mouseY < (circle2PosY + diameter / 2)) {
    Play2();
  }
  */
}

/*
function Play1() {
  playVideo1 = true;
  playVideo2 = false;
}

function Play2() {
  playVideo2 = true;
  playVideo1 = false;
}
*/


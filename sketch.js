/*
 * Cinema Expandido Web
 * Proyecto Final (07/junio/2018)
 * Diego Morales Servin
 * 
 * URL
 */

/*
 *****************************************
 * VARIABLES
 *****************************************
 */
//Variables Videos
var video;
var video2;
var playVideo1 = false;
var playVideo2 = false;

//Variables Circle
var circle1PosX = 500;
var circle1PosY = 500;

var circle2PosX = 1200;
var circle2PosY = 300;

var diameter = 50;
var angle = 0;
var smallDiameter = 60;

function preload() {
  video = createVideo("assets/video1.mp4");
  video2 = createVideo("video2.mp4");
}

function setup() {
  //Setup Video
  createCanvas(1920, 720);
  video.loop();
  video.hide();
  video2.loop();
  video2.hide();
  
  //Setup Circle
  noFill();
  strokeWeight(5);
  stroke(255, 204, 0);
}

function draw() {
  background(0);
  if (playVideo1 === true) {
    image(video2, 0, 0);
  }

  if (playVideo2 === true) {
    image(video, 0, 0);
  }

  var d1 = smallDiameter + (sin(angle) * diameter / 2) + diameter / 2;
  ellipse(circle1PosX, circle1PosY, d1, d1);
  ellipse(circle2PosX,circle2PosY,d1,d1);
  angle += 0.05;
  
  print("VIDEO " + playVideo1);
  print("VIDEO2 " + playVideo2);

}

function mouseClicked() {
  if (mouseX > (circle1PosX-diameter/2) && mouseX < (circle1PosX+diameter/2) && mouseY > (circle1PosY-diameter/2) && mouseY < (circle1PosY+diameter/2)) {
    Play1();
    //window.alert("Hello world!");
  }

  if (mouseX > (circle2PosX-diameter/2) && mouseX < (circle2PosX+diameter/2) && mouseY > (circle2PosY-diameter/2) && mouseY < (circle2PosY+diameter/2)) {
    Play2();
  }
}

function Play1() {
  playVideo1 = true;
  playVideo2 = false;
}

function Play2() {
  playVideo2 = true;
  playVideo1 = false;
}
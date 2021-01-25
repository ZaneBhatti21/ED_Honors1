var w; 
var s;

function setup() {
  createCanvas(1024, 768);
  background('#ff9933');
  
  w = 40;
  
  noStroke();
}
function draw() {
  var Colors = [color('#ff9933'), color('#ff0000'), color('#000000'), color('#ffffff')]; 

  fill(Colors[int(random(0, 4))]);
  var a = random (50, 150)
  var b = random (50, 150)
  var c = random (50, 150)
  var d = random (50, 150)
  var e = random (50, 150)
  var z = random (-10, 500)
    for (var x = (-10, 768); x > 1; x--) {
       ellipse(0 + w/2, x+(a+z), w, w);
       ellipse(40 + w/2, x+(b+z), w, w);
       ellipse(80 + w/2, x+(c+z), w, w);
       ellipse(120 + w/2, x+(d+z), w, w);
       ellipse(160 + w/2, x+(e+z), w, w);
       ellipse(200 + w/2, x+(a+z), w, w);
       ellipse(240 + w/2, x+(b+z), w, w);
       ellipse(280 + w/2, x+(c+z), w, w);
       ellipse(320 + w/2, x+(d+z), w, w);
       ellipse(360 + w/2, x+(e+z), w, w);
       ellipse(400 + w/2, x+(a+z), w, w);
       ellipse(440 + w/2, x+(b+z), w, w);
       ellipse(480 + w/2, x+(c+z), w, w);
       ellipse(520 + w/2, x+(d+z), w, w);
       ellipse(560 + w/2, x+(e+z), w, w);
       ellipse(600 + w/2, x+(a+z), w, w);
       ellipse(640 + w/2, x+(b+z), w, w);
       ellipse(680 + w/2, x+(c+z), w, w);
       ellipse(720 + w/2, x+(d+z), w, w);
       ellipse(760 + w/2, x+(e+z), w, w);
       ellipse(800 + w/2, x+(a+z), w, w);
       ellipse(840 + w/2, x+(b+z), w, w);
       ellipse(880 + w/2, x+(c+z), w, w);
       ellipse(920 + w/2, x+(d+z), w, w);
       ellipse(960 + w/2, x+(e+z), w, w);
       ellipse(1000 + w/2, x+(a+z), w, w);
       ellipse(1040 + w/2, x+(a+z), w, w);
       ellipse(1080 + w/2, x+(b+z), w, w);
       ellipse(1120 + w/2, x+(c+z), w, w);
       ellipse(1160 + w/2, x+(d+z), w, w);
       ellipse(1200 + w/2, x+(e+z), w, w);
       ellipse(1240 + w/2, x+(a+z), w, w);
       ellipse(1280 + w/2, x+(b+z), w, w);
       ellipse(1320 + w/2, x+(c+z), w, w);
       ellipse(1360 + w/2, x+(d+z), w, w);
       ellipse(1400 + w/2, x+(e+z), w, w);
       ellipse(1440 + w/2, x+(a+z), w, w);
       ellipse(1480 + w/2, x+(b+z), w, w);
       ellipse(1520 + w/2, x+(c+z), w, w);
       ellipse(1560 + w/2, x+(d+z), w, w);
       ellipse(1600 + w/2, x+(e+z), w, w);
       ellipse(1640 + w/2, x+(a+z), w, w);
       ellipse(1680 + w/2, x+(b+z), w, w);
       ellipse(1720 + w/2, x+(c+z), w, w);
       ellipse(1760 + w/2, x+(d+z), w, w);
       ellipse(1800 + w/2, x+(e+z), w, w);
  }
  loop();
  frameRate (.75);
}
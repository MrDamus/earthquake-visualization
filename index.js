var yellowstoneLatitude = 44.4123;
var yellowstoneLongitude = 110.7232;
var volcanoImg;

var mapImg;

var centerLatitude = 0;
var centerLongitude = 0;

var latitude = 49.2827;
var longitude = -123.1207;

var zoom = 1;
var earthquakes;

var circleSize = 1500;


function preload() {
  mapImg = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1/1024x512?access_token=pk.eyJ1IjoibXJkYW11cyIsImEiOiJjamdwMTFpbXAwZmF4MzNvMnJueWhvazVkIn0.HaAUa8rcmLQkH69ICwqPDg");
  earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.csv');
  volcanoImg = loadImage('volcano.png');
}

function setup () {
  createCanvas(1024, 512);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapImg, 0, 0);




  // image(volcanoImg, yellowstoneLatitude, yellowstoneLongitude, 50, 50)
  image(volcanoImg, -318, -148, 20, 20);

  refreshButton = createButton('Refresh data');
  refreshButton.position(8, 499);
  refreshButton.mousePressed(refreshData);

  function refreshData(){
    
  }

  var cx = mercX(centerLongitude);
  var cy = mercY(centerLatitude);

  // var x = mercX(longitude) - cx;
  // var y = mercY(latitude) - cy;


  for (var i = 0; i < earthquakes.length; i++) {
    var x = mercX(longitude) - cx;
    var y = mercY(latitude) - cy;
    var data = earthquakes[i].split(/,/);
    //console.log(data);
    var latitude = data[1];
    var longitude = data[2];
    var mag = data[4];

    // mag = pow(10, mag);
    // mag = sqrt(mag);
    mag = pow( 10, mag / 2 );
    var magMax = sqrt(pow(10,10));

    var pointSize = map(mag, 0, magMax, 0, circleSize);

    fill(255, 0, 255, 200);
    stroke(100, 100);
    ellipse(x, y, pointSize , pointSize);
  }
  
}

function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  latitude = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + latitude / 2);
  var c = PI - log(b);
  return a * c;
}

function draw(){

}
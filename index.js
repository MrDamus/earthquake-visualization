var mapimg;
var accessToken = 'pk.eyJ1IjoibXJkYW11cyIsImEiOiJjamdvejIyZ20wOWVpMzNtZ3Rsb2R0MDJpIn0.UhUE1262xbyAUutdzrh4_Q';
function preload() {
  mapimg = loadImg('https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/-122.4241,37.78,14.25,0,60/600x600?access_token=pk.eyJ1IjoibXJkYW11cyIsImEiOiJjamdvejIyZ20wOWVpMzNtZ3Rsb2R0MDJpIn0.UhUE1262xbyAUutdzrh4_Q');
}

function setup () {
  createCanvas(600, 600);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  //image(mapimg, 0, 0);
}

function draw() {
Fill(255);
}
var canvas;
var database, form, user;

function setup(){
  canvas =  createCanvas(windowWidth-10,windowHeight-10);
  database = firebase.database();

  form = new Form();
  user = new User();
}

function draw(){
  background('lightblue');

  form.display();
}
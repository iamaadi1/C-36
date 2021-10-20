var canvas;
var backgroundImage
var game,form,player;
var database;

function setup(){
database=firebase.database();
canvas = createCanvas(windowWidth,windowHeight);

game = new Game()
game.start();

}

function preload(){
backgroundImage=loadImage("assets/background.png");


}

function draw(){

background(backgroundImage);



  
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
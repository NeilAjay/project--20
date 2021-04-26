var jerry, jerry1, jerry2, jerry3;
var tom, tom1, tom2, tom3, catRunning;
var garden;

function preload() {
    //load the images here
    jerry1 = loadAnimation("images/mouse1.png");
    jerry2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry3 = loadAnimation("images/mouse4.png");

    tom1 = loadAnimation("images/cat1.png");
    tom2 = loadAnimation("images/cat2.png","images/cat3.png");
    tom3 = loadAnimation("images/cat4.png");

    garden = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870, 600);
    tom.addAnimation("tomStanding", tom1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerry1);
    jerry.scale = 0.2;

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < tom.width/2 + jerry.width/2)
{
        tom.velocityX = 0;
        tom.addAnimation("catStopped", tom3);
        tom.changeAnimation("catStopped");

        jerry.addAnimation("jerry", jerry3);
        jerry.changeAnimation("jerry");
    }
    text(jerry.x + ',' + jerry.y, 10, 45);


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("catRunning", tom2);
      tom.changeAnimation("catRunning")

      jerry.addAnimation("jerryTeasing", jerry2);
      jerry.frameDelay = 25;
      jerry.changeAnimation("jerryTeasing");
  }

}

var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200, 200, 30, 50);
  movingrect = createSprite(600, 200, 50, 30);
  
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if (abs(movingrect.x-fixedrect.x) < (movingrect.width/2)+(fixedrect.width/2) && abs(movingrect.y-fixedrect.y) < (movingrect.height/2)+(fixedrect.height/2)){
    fixedrect.shapeColor="red";
  }
  else{
    fixedrect.shapeColor = "green";
  }
  drawSprites();
}
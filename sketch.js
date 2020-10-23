var fixedrect,movingrect

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(200,200,100,50);
  fixedrect = createSprite(400,200,100,50);

  movingrect.shapeColor = "red"
  fixedrect.shapeColor = "red"
}

function draw() {
  background(0);
 
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    &&fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
      movingrect.shapeColor = "blue"
      fixedrect.shapeColor = "blue"
    }
    else {
      movingrect.shapeColor = "red"
      fixedrect.shapeColor = "red"
    }
  drawSprites();
}
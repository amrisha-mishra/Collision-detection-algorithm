var rect1 , rect2;




function setup() {
  createCanvas(400,400);
 rect1 = createSprite(200,200,40,50);
 rect1.shapeColor = "pink";
 rect1.debug = true;
 rect2 = createSprite(300,300,70,50);
 rect2.shapeColor = "white";
 rect2.debug = true;
}

function draw() {
  background("black"); 
rect2.x = mouseX;
rect2.y = mouseY;
if(rect2.x - rect1.x<rect1.width/2+rect2.width/2 && rect1.x - rect2.x< rect1.width/2+rect2.width/2&& rect2.y - rect1.y<rect1.height/2+rect2.height/2 &&rect1.y - rect2.y<rect1.height/2+rect2.height/2) {
  rect1.shapeColor = "blue";
  rect2.shapeColor = "yellow";
}
else {
  rect1.shapeColor = "pink";
  rect2.shapeColor = "white";
}
  drawSprites();
}
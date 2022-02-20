var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg,i;
function preload(){
  //imagens pré-carregadas
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //cria a estrada
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY =  4;
  path.scale = 1.2;
   //criar o menino
   boy = createSprite(180,340,30,30);
   boy.addAnimation("meninocorrendo",boyImg);
   boy.scale = 0.08;
   //cria a borda esquerda
   leftBoundary=createSprite(0,0,100,800);
   leftBoundary.visible = false;
  //cria a borda esquerda
    rightBoundary=createSprite(410,0,100,800);
    rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  boy.x = World.mouseX;
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  if(path.y > 400){
    path.y = height/2;
  }
  drawSprites;
}

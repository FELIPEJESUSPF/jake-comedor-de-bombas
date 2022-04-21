var jake
var floor
var jakemg
var floormg
var bomb
var coin
var bombimg,coinimg

function preload(){
  jakemg=loadAnimation("Jake1.png", "Jake2.png","jake3.png","jake4.PNG","jake5.png")
  floormg=loadImage("path.png")
  bombimg=loadImage("bomb.png")
  coinimg=loadImage("coin.png")
  
}

function setup(){
  createCanvas(400,400);
  floor=createSprite(200,200)
  floor.addImage(floormg)
  floor.velocityY= 10
  jake=createSprite(200,200)
  jake.addAnimation("peste correndo",jakemg)
  
}


function draw() {
  background(0);

  jake.x = mouseX
  
  if (floor.y> 400 ) {
      floor.y = width/2
      
}


  var select=Math.round(random(1,2))
  if(frameCount%60==0){
     if(select==1 ){
    gerarbombas()
        
}  else{
  gerarcoin()
}
     
}
  drawSprites()
}

function gerarbombas(){
  bomb=createSprite(200,20);
  bomb.addImage(bombimg)
  bomb.scale= 0.1
  bomb.velocityY = 3
  
}
function gerarcoin(){
  coin=createSprite(115,20);
  coin.addImage(coinimg)
  coin.scale= 0.46
  coin.velocityY = 3
  
}
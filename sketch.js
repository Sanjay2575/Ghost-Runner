var gameState = "play"
var tower, towerImage
var door, doorImage, doorGroup
var climber, climberImage, climberGroup
var invisibleblock, invisibleblockGroup
var ghost, ghostImage



function preload(){
towerImage = loadImage("tower.png");
doorImage = loadImage("door.png");
climberImage = loadImage("climber.png");
ghostImage = loadImage("ghost-standing.png")
  
doorGroup = new Group();  
climberGroup = new Group();  
invisibleblockGroup = new Group();  
  
}

function setup(){
createCanvas(500,600)
tower = createSprite(300,300)
tower.addImage(towerImage)
ghost = createSprite(200, 200)
ghost.addImage(ghostImage)
ghost.scale = 0.5;



tower.velocityY = 1
  
  
  
  
  
}





function draw(){
background(0) 

if(gameState === "play"){
if(tower.y>400){
tower.y = 300
spawnDoors()
  
if(keyDown("left_arrow")){
ghost.x = ghost.x-3
}
if(keyDown("right_arrow")){
ghost.x = ghost.x+3;
}  
if(keyDown("space")){
ghost.y = -5  

}
ghost.velocityY = ghost.velocityY + 0.8
if(climberGroup.isTouching(ghost)){
ghost.velocityX = 0;  
}
if(invisibleblockGroup.isTouching(ghost||ghost.y>600)){
ghost.destroy()
gameState = "end"
}
}

  
  
} else if(gameState === "end"){
text("Game Over", 200, 230)
textSize(30)
fill("red")
}
  
  
  

  
drawSprites();  
}

function spawnDoors(){
if(frameCount%240===0){
door=createSprite(200,-50) 
door.addImage(doorImage)
door.velocityY = 1
door.x = Math.round(random(150, 400))
door.lifetime = 800;

climber=createSprite(200,10)
climber.addImage(climberImage)
climber.velocityY = 1
climber.x = door.x
climber.lifetime = 800;
invisibleblock=createSprite(200, 15);
invisibleblock.width = climber.width
invisibleblock.height = 2
invisibleblock.lifetime = 800;
invisibleblock.velocityY = 1;
invisibleblock.x = climber.x
invisibleblockGroup.add(invisibleblock)
doorGroup.add(door)
climberGroup.add(climber)
}


}

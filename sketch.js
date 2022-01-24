// 1° function preload
// 2° function setup
// 3° function draw


var fundo
var fundoimagem
var player
var playerimagem
var piso



function preload(){

fundoimagem = loadImage("scene.png")

playerimagem = loadImage("zombie.gif")
}

function setup() {


createCanvas(1200,670); 



fundo = createSprite(width/2,height/2,width,height);

fundo.addImage(fundoimagem);

player = createSprite(100,580,20,20)

player.addImage(playerimagem);

player.scale=0.5;

piso = createSprite(600,650,1200,20)

piso.visible=false
}



function draw() {

background("black")

fundo.velocityX=-5;

if(fundo.x < 0){
fundo.x=width/2;    
}

if(keyDown("space")){

player.velocityY=-10;


}

player.velocityY=player.velocityY+1;

player.collide(piso);

drawSprites();
}

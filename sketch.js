var boy_running;
var man_running;
var boy;
var man;
var food;
var coin;
var food_running;
var coin_running;








function preload(){


boy_running=loadAnimation("B1.png","B2.png","B3.png","B4.png","B5.png","B6.png","B7.png","B8.png");
man_running=loadAnimation("M2.png","M3.png","M4.png","M5.png","M7.png");
food_running=loadImage("food.png");
coin_running=loadImage("coin.png");
//barricade1_running=loadImage("barricade.png");   




}


function setup(){
createCanvas(1800,800);
ground=createSprite(0,780,3600,15);
man=createSprite(90,600,20,70);
boy=createSprite(400,600,20,70);
boy.addAnimation("boyRunning",boy_running);
man.addAnimation("manRunning",man_running);
boy.scale=0.8;
man.scale=1.5;


//ground.visible=true;
ground.velocityX=-8;
foodGroup=new Group();
score=0;





}


function draw(){
background("green");
spawnPower();
drawSprites();
if(foodGroup.isTouchingboy){
score= score+2;
fill("white");
text("score"+score,500,100);


}





}
function spawnPower(){
//if(frameCount % 200===0){
 food=createSprite(900,500,35,35)
 food.velocityX= -10;
// var rand=Math.round(random(1,2));
// switch(rand){
// case 1: food.addImage(food_running);
//            break;
// case 2: food.addImage(coin_running);
//             break;
// default :break;



// }

// food.scale=0.1;
// foodGroup.add(food);
//}



}
// // function spawnObstacles(){
// if(frameCount % 300===0){
// obs=createSprite(1800,760,20,15);
// obs.velocityx=-10;

// }



   


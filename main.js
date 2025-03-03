/*Angel Castillo
  00339250
  VideoGame*/


//GO!! GO!! POWER RANGERS!!
//Use WASD to move, SPACE to dash and LEFTCLICK to attack
//Don't let them reach the center!!

let hero;
let sword;
let healthBar=3

function setup() {
  createCanvas(900, 600);
  
  monsterStorage();
  hero = new Hero();
  sword = new Sword();
  
}


function draw() {
 
  background("rgb(221,221,181)");
  
  sword.show();
  hero.show();
  hero.movement();
  
  
if(startGame){
  monsterShow();
}
  if(healthBar<1){
    gameOver=true
  }
  
  else{
    gameOver=false
  }
  
  game();
   
}








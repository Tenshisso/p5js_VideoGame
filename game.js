//start screen and game over screen


let startGame=false
let gameOver=false


function game(){
  
  if(startGame==false){
    background("black")
    
push()
    fill("green")
    
    textFont('Courier New',20)
    text("Press ENTER to start",300,450)
    
    fill("red")
    textSize(100)
    stroke("white")
    strokeWeight(15)
    
    text("GO!GO!",70,120)
    text("POWER RANGERS!",70,300)
    
pop()
    
  }
  
  
  if(gameOver){

    background("black")
push()    
    fill("green")
    textFont('Courier New',20)
    text("Press ESC to restart the game",280,400)
    
    textFont('Courier New',100)
    strokeWeight(10)
    stroke("red")
    fill("white")
    text("GAME OVER",180,200)
pop()  
    
    
  }
  
  
  
  
  
  
  
  
  
}

//sword object

let attack=false

function mousePressed(){
 attack=true
}


function mouseReleased(){
  attack=false
}

/*function for the sword so I can change arms
whitout having to change all the points*/


function swordPosition(herox,heroy){
        fill("black")
        rect(herox+35,heroy+20,5,18)
  
        fill("gray")
        triangle(herox+32,heroy-55,herox+42,heroy-55,herox+37,heroy-70)

        fill("gray")
        rect(herox+32,heroy-55,10,80)
      
        fill("yellow")
        stroke(1)
        triangle(herox+20,heroy+25,herox+55,heroy+25,herox+36,heroy+15)
        ellipse(herox+38,heroy+40,10,5)
  
push()
        stroke("rgb(18,241,18)")
        line(herox+37,heroy+10,herox+37,heroy-45)
pop()
  
  }

//function for right direction of the sword(horizontal sword)

function swordRightAttack(x,y){
 
 fill("black")
 rect(x+35,y+28,18,5)
  
 fill("gray")
 triangle(x+135,y+35,x+145,y+30,x+135,y+25)
  
 fill("gray")
 rect(x+55,y+25,80,10)
  
 fill("yellow")
 triangle(x+55,y+48,x+65,y+30,x+55,y+10)
  
 ellipse(x+35,y+30,5,12)

push()
 stroke("red")
 line(x+70,y+30,x+125,y+30)
pop()
 
  
}


//function for left direction of the sword

function swordLeftAttack(x,y){
 fill("black")
 rect(x-60,y+28,18,5)
  
 fill("gray")
 triangle(x-140,y+35,x-150,y+30,x-140,y+25)
  
 fill("gray")
 rect(x-140,y+25,80,10)
  
 fill("yellow")
 triangle(x-60,y+48,x-70,y+30,x-60,y+10)
  
 ellipse(x-40,y+30,5,12)

push()
 stroke("red")
 line(x-75,y+30,x-135,y+30)
pop()
  
  
}




class Sword{
  
  constructor(){
    this.x=herox
    this.y=heroy
  }
  
  
  show(){
    
    if(attack==false){

         if(mouseX>herox+30) {
            swordPosition(herox,heroy-2.5)
         }
      
          else if(mouseX<herox-30) {
            
           
           swordPosition(herox-75,heroy-2.5); 
            
          }
      
      
    }
    
    else if(attack==true && mouseX > herox +30){
      
          swordRightAttack(herox,heroy)
          
        }
    
    else{
      swordLeftAttack(herox,heroy)
    }
      
      
      
      
      
      

     }
    
    
  
  
}    
    
let herox=300
let heroy=300

let leg1=30;
let leg2=30;
let w=false, a=false, s=false, d=false;
let dash= false;
let dashdistance=0;


function keyPressed(){
  
//wasd movement
  if(key==="w"){
    w=true
  }
  if(key==="a"){
    a=true
  }
  if(key==="s"){
    s=true
  }
  if(key==="d"){
    d=true
  }
  
//space key for dash movement
  if(keyCode==32){
    dash=true
  }

//enter key to start the game
  if(keyCode==13){
    startGame=true
  }
  
//esc key to restart the game
  if(keyCode==27){
    healthBar=3
    monsters.splice(0,monsters.length)
  }
  
}


function keyReleased(){
  if(key==="w"){
    w=false
  }
  if(key==="a"){
    a=false
  }
  if(key==="s"){
    s=false
  }
  if(key==="d"){
    d=false
  }
  
  if(keyCode==27){
    monsterStorage();
  }
  
}


class Hero {
  
  constructor(){
    this.x = herox
    this.y= heroy
  }
  
  show(){

  //legs
    
push()
  
  stroke(1)
  fill("red")
  ellipse(this.x-8,this.y+20+leg1,11,60)
  noStroke()
  fill("white")
  ellipse(this.x-8,this.y+65,9.5,5)
    
  stroke(1)
  fill("red")
  ellipse(this.x+8,this.y+20+leg2,11,60)
  noStroke()
  fill("white")
  ellipse(this.x+8,this.y+65,9.5,5)
    
pop()
    
    
    
  //arms
push()
  
  stroke(1)
  fill("red")
  ellipse(this.x+15,this.y+30,55,10)   
  noStroke()
  fill("white")
  ellipse(this.x+27,this.y+30,5,10)
    
    
  stroke(1)
  fill("red")
  ellipse(this.x-18,this.y+30,55,10)
  noStroke()
  fill("white")
  ellipse(this.x-28,this.y+30,5,10)
    
pop()
    
    
    //head
push()
  fill("red")
  stroke(1)
  circle(this.x,this.y,25)
    
  fill("black")
  strokeWeight(2)
  stroke("white")
  ellipse(this.x,this.y-4,24,8)
  
  fill("gray")
  stroke(1)
  stroke("white")
  strokeWeight(1)
  quad(this.x-3, this.y+3, this.x+3, this.y+3, this.x+8, this.y+8, this.x-8, this.y+8)
pop()
     
    
    
  //body
push()
  stroke(1)
  fill("red")
  ellipse(this.x,this.y+35,40,50)
  noStroke()
  fill("white")
  quad(this.x, this.y+35, this.x+19, this.y+25, this.x, this.y+15, this.x-19, this.y+25)
  triangle(this.x-17,this.y+50,this.x+17,this.y+50,this.x,this.y+35)
    
pop()
    
    
  }   
    
  
//code for the movement of the hero and limits so It doesn't go out of the canvas
  
  movement(){
    
    if(w){
      this.y-=2
      heroy-=2
      if(this.y<height-580){
        w=false
      }
    }
    if(a){
      this.x-=2
      herox-=2
      if(this.x<width-880){
        a=false
      }
    }
    if(s){
      this.y+=2
      heroy+=2
      if(this.y>height-100){
        s=false
      }
    }
    
    if(d){
    this.x+=2
    herox+=2
     if(this.x>width-20){
       d=false
     }
    }
    
   hero.dashAnimation()
   hero.legsAnimation()
    
   }
  
  
  
  legsAnimation(){
    
    if( w||a||s||d){
      leg1+=1
      leg2+=0.5
      if(leg1>50){
        leg1=25
      }
      
      if(leg2>50){
        leg2=25
      }
    
  } 
}
  
  
//code for the dash with a limit on how far It can dash.
  
  dashAnimation(){
    if(a && dash){
       this.x-=30
       herox-=30
       dashdistance++
      
      if(dashdistance>3){
        dash=false
        dashdistance=0
      }
    }
    
    if(w && dash){
       this.y-=30
      heroy-=30
       dashdistance++
      
      if(dashdistance>3){
        dash=false
        dashdistance=0
      }
    }
    
    
    if(s && dash){
       this.y+=30
       heroy+=30
       dashdistance++
      
      if(dashdistance>3){
        dash=false
        dashdistance=0
      }
    }
    
    
    if(d && dash){
     this.x+=30
      herox+=30
     dashdistance++
      
      if(dashdistance>3){
        dash=false
        dashdistance=0
      }
    }
 }

}

  
  

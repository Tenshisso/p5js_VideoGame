let monsters = []

function monsterShow() {
  
  for (let i=monsters.length-1;i>=0;i--) {
    
    if (attack && mouseX > herox + 30) { 
      
      let distance = dist(herox + 75, heroy, monsters[i].x, monsters[i].y); 
      
      if (distance < monsters[i].siz / 2 + 10) {
        monsters.splice(i, 1); 
        continue; 
      }
      
    }
    
    if (attack && mouseX < herox - 30) {
      
      let distance = dist(herox - 75, heroy, monsters[i].x, monsters[i].y); 
      
     if (distance < monsters[i].siz / 2 + 10){ 
        monsters.splice(i, 1);
       
      }
    }
    
    
    monsters[i].movement();
    monsters[i].show();
    
  }
  
}




function monsterStorage(){
  for (let i = 0; i < 5; i++) {
    let x = random(-200,-100);
    let y = random(height);
    let size = random(30, 60);
    let col = color(random(255), random(255), random(255));  
    monsters.push(new Monster(x, y, size, col));
    }
  
   for (let i = 0; i < 5; i++) {
    let x = random(900,1200);
    let y = random(height);
    let size = random(30, 60);
    let col = color(random(255), random(255), random(255));  
    monsters.push(new Monster(x, y, size, col));
    }
   
  
}




class Monster {
  
  constructor(x, y, siz, col) {
    this.x = x; 
    this.y = y; 
    this.siz = siz; 
    this.col = col
    this.speed = random(1, 3)
    
  }

  movement() {
    if(this.x<450){
      this.x+=1
      
      if(this.x>450){
        healthBar-=1
      }
      
    }
    
    else if(this.x>450){
      this.x-=1
    }
    
  
  }

  show() {
    fill(this.col);
    circle(this.x, this.y, this.siz);
  }


}



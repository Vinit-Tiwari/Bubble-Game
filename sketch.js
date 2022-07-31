function bubble(x,y){
    this.x=x;
    this.y=y;
    this.red=random(0,255);
    this.green=random(0,255);
    this.blue=random(0,255);
    this.diameter=50;
    this.speed=3;
    
    this.display=function(){
      return ellipse(this.x,this.y,this.diameter,this.diameter)
    }
    
  }
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    
  }
  
  
  let bub=[];
  
  
  function draw() {
    background(0);
    
    for(let i=0;i<bub.length;i++)
      {
        fill(bub[i].red,bub[i].green,bub[i].blue)
        bub[i].display()
        
        bub[i].y+=bub[i].speed
        
        if(bub[i].y>height){
          bub[i].speed=-3
        }
        else if(bub[i].y<0){
          bub[i].speed=3
        }
      }
    
      if(bub.length>30)
        {
          bub.splice(0,1);
        }
    
  
  }
  
  function mousePressed()
  {
    bub.push(new bubble(mouseX,mouseY));
  }
  
  
  
  
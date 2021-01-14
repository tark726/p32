class GreenBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
        this.visibility =255;
    }
    score()
    {
      if(this.visibility<0 && this.visibility >- 105)
      {
        score++
      }
    }
    display(){
        if(this.body.speed < 3){
            fill("green");
            super.display(); 
          }
          else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility -260;
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            rect(this.x,this.y, 20, 30);
            pop();
          }
    }
}
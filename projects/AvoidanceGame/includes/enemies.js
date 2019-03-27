class enemy {

    constructor(){
        this.y = 0;
        this.x = 100;
        this.speed = 4;
        this.c = color(170);
        this.hitBottomWall = false;
    }
    

    show(){
        fill(this.c);
        strokeWeight(1);
        stroke(0);
        ellipse(this.x,this.y,20,20);
          
     }

     update(){
        
        this.changeDirection();
        this.y = constrain(this.y, 20, height-20);
        

     }

     changeDirection(){

        if(this.y >= height-20 || this.y <= 20){
    
            this.hitBottomWall = !this.hitBottomWall;

        }

       if (this.hitBottomWall == false){
            this.y += this.speed;
       }
       else{
           this.y -= this.speed;
     }

    }
}     

     
     

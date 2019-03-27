class Player {
    
    constructor(){

        this.y = 300;
        this.x = 50;
        this.speed = 3;
        this.acc = 1;
        this.c = color(255,255,255);
        
    }


    show(){
        
        fill(this.c);
        ellipse(this.x,this.y,20,20);
        
        stroke('#fdcded');
        strokeWeight(2);
        fill(255);
        stroke(0);
        textSize(13);
        text("Player",this.x-16,this.y-15);
        
    }

   
   
    update(){

        //Contain Player within the canvas
        this.x = constrain(this.x,15,width-15)
        this.y = constrain(this.y,15,height-67);

        //left
        if(keyIsDown(65) || keyIsDown(LEFT_ARROW)){
            this.x -= this.speed*this.acc;

        }

        //right
        if(keyIsDown(68) || keyIsDown(RIGHT_ARROW)){
            this.x += this.speed*this.acc;
        }

        //up
        if(keyIsDown(87) || keyIsDown(UP_ARROW)){
            this.y -= this.speed*this.acc;
        }

        //down
        if(keyIsDown(83) || keyIsDown(DOWN_ARROW)){
            this.y += this.speed*this.acc;
        }

        //Boost
        if(keyIsDown(16)){
            this.acc = 2;
            
        }
        else{
            this.acc = 1;
        }
     }

 
}

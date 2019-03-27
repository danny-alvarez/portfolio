class Player{

    constructor(){
        this.x = 10;
        this.y = height/2;
        this.c = color("#b64543");
        this.speed = 3;
        this.acc = 1;
       
        

    }

    show(){


        fill(this.c);
        stroke(0);
        strokeWeight(1);
        ellipse(this.x, this.y, 20, 20);
    }

    update(){

        this.movement();
      
    }

    movement(){

       
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

        this.x = constrain(this.x, 10, width-10);
        this.y = constrain(this.y, 10, height-10);
    }

    
    

}
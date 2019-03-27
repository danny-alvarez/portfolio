class Player{

    constructor(x,y){

        this.x = x;
        this.y = y;
        this.r = 20;
        this.speed = 15;
        this.c = color(0);

    }

    display(){
        
        fill(this.c);
        noStroke();
        ellipse(this.x,this.y,this.r*2);
    }

    update(){

    
        this.x += this.speed;
        
    }


}
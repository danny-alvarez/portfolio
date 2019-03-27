class Player{

    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.speed = 5;
        this.c = color(255,100,100);
        this.radius = radius;
        this.health = 1;
    }

    display(){

        fill(this.c);
        noStroke();
        ellipse(this.x,this.y,this.radius);
    
    }

    update(){

       if(key === "a"){
           this.x -= this.speed;
       }
       
       if(key === "d"){
        this.x += this.speed;
        }


    }



}
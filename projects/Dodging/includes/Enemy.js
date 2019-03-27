class Enemy{

    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.speed = 8;
        this.c = color(100,100,random(100,255));
        this.radius = radius;
        
       
    }

    display(){

        fill(this.c);
        noStroke();
        ellipse(this.x,this.y,this.radius);
    
    }

    update(){

       this.y +=this.speed;
    }

    reposition(){
        if(this.y > height + this.radius){
            this.x = random(20,width-20);
            this.y = random(-20,-500);
        }
    }


}
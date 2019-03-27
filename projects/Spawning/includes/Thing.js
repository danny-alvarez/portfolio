class Thing{

    constructor(){
        this.x = random(10,width);
        this.y = random(10, height-10);
        this.pos = createVector(this.x,this.y);

}



    display(){
        fill(255,0,0);
        ellipse(this.pos.x,this.pos.y,10,10);
        
    }

}
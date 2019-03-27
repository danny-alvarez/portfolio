class Grave {

    constructor(){

        this.x = 25;
        this.y = height -25;
        this.c = color('rgba(255,255,255,.6)');
    }

    show(){
    fill(this.c);
    ellipse(this.x,this.y,20,20);
    strokeWeight(2);
    stroke(240);
    line(0,height-50,width,height-50);
    line(50,height-50,50,height)
    }
}
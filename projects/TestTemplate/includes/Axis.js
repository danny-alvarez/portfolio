class Axis{

    constructor(x,y,x1,y1){

        this.x = x;
        this.y = y;
        this.x1 = x1;
        this.y1 = y1;
    }
    

    show(){
        //got this translate idea from the p5 reference example and heavily modified it
        //by randomizing the movement.
        line(this.x,this.y,this.x1,this.y1);
        stroke('#000');
    
    }
}
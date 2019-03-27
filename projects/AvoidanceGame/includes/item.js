//Item object
class Item {

    constructor(){
        this.y = height/2;
        this.x =  width-20;
        this.c = color("#FFDD1B");
      
    }

    show(){
        // //got this translate idea from the p5 reference example and heavily modified it
        // //by randomizing the movement.
        // translate(p5.Vector.fromAngle(this.rotationMultiplier*(millis()/500),
        //             this.angleOfRotation));
        fill(this.c);
        strokeWeight(1);
        stroke(0);
        ellipse(this.x,this.y,20,20);
        
          
     }

    
     
     
}
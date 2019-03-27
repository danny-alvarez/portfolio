//Item object
class Item {

    constructor(){
        this.y = random(40,height-100);
        this.x = random(40,width-50);
        this.leftHit = this.x-50;
        this.wallHit = false;
        this.speed = 1;
        this.c = color(255,255,255);
        this.angleOfRotation = random(.1,.8);
        this.rotationMultiplier = random(-5,5);
    }
    

    show(){
        //got this translate idea from the p5 reference example and heavily modified it
        //by randomizing the movement.
        translate(p5.Vector.fromAngle(this.rotationMultiplier*(millis()/500),
                    this.angleOfRotation));
        fill(this.c);
        strokeWeight(1);
        stroke(0);
        ellipse(this.x,this.y,20,20);
        
          
     }

     update(){
        
        // this.x -= this.speed;
        //constraints
        this.x = constrain(this.x,15,width);
        this.y = constrain(this.y,15,height);

    
     }

     changeDirection(){
        if( this.wallHit == true){
            this.x += this.speed;
        }

     }
     
     
}
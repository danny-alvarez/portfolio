


var k =0;
var time = 0;
var speed = 5;
//var interval = 0;
//var slider;
function setup(){

    createCanvas(400,400);
    //slider = createSlider(1,10,1,0.001)
    
}

function draw(){
    time ++;
    //interval = slider.value();
    
    k += 0.0005;

    background(90);
    translate(width/2,height/2);

    
    beginShape();
    //change color
    if(time % 60 == 0){
        stroke(random(200,255),random(200,255),random(200,255));
    }
    
    noFill();
    strokeWeight(1);
    //changing angle(a) changes the shape (smaller is more circular) 
    for(var a=0; a < TWO_PI * speed; a+= .1){
        
        var r = 200 * cos(k*a);
        var x = r * cos(a);
        var y = r * sin(a);

       
        vertex(x,y);
    }
    endShape();

}

var time;
var color;

var colorAdding = true;

function setup(){

    createCanvas(600,600);
    frameRate(60);
    time = 0;
    color=1;
   
}

function draw(){
   
    
    oscillateColor();
    

    fill(100,100,100);
    noStroke();
    ellipse(width/2,height/2,50,50);

}


function oscillateColor(){
     if(time >= 0){
        time++;
        if(colorAdding){
            color++;
        }
        else{
            color--;
        }
       
        if(color % 255 == 0){
            console.log("sign must change now");
            colorAdding = !colorAdding;
        }
        background(color);
    }
    
}


/* time++ 
    color = 0
    color += color*sign
    if(color % 255 = 0){
        swicthSign()
        color --
    }*/

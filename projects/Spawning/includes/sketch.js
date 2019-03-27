
var time = 0;
var things = [];
var thingCount = 0;
var dotText;
function setup(){

    createCanvas(600,600);
    frameRate(60);
    
}

function draw(){
    background(250);
    if(time%20 == 0){
        things.push(new Thing());
        thingCount ++;
    }
    for (thing of things){
        thing.display();
    } 
    time += 1;
   dotCounter();
}

function dotCounter(){
    dotText = "dots: " + thingCount;
    textSize(10);
    fill(0);
    text(dotText,10,10);

}
    
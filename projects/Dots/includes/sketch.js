/* -------DOTS---------*/
/* Author: Daniel Alvarez*/
/* NOTE ON GAME: My intention with this project was to try out various techniques in game programming
using the p5.js library. The idea of this game is to collect all the dots. However you can only collect
dots that are ypur color to gain points and lose points if they aren't the same color.
I also wanted a timer to track how long it takes to finish.
The biggest challenge was getting my player's color to change to the colors that are left
on the field. The overall idea of the game is very basic and not very fun for now but improvements will be
made. I will keep experimenting with this library*/

/*Intended Future Improvements:
Use a countdown timer to make it challenging
Get sound in the game
Fix dots spawning on top of each other
Style page nicely
Have user select difficulty levels (number of dots on the screen).
*/

var player;
var items= [];
var grave;
var graveCount = 50;
let strokeColors = ["crimson","yellow","royalblue","aqua","mediumturquoise", "orchid"];
var possibleColors = {
    crimson: 0,
    yellow: 0,
    royalblue: 0,
    aqua: 0,
    mediumturquoise: 0,
    orchid: 0
};

var points = 0;
var canCombo = false;
var comboPoints = 0;
var comboCounter = 0;
var maxtime = 60;
//Function called when page is load
function setup(){
    //canvas and FrameRate
    createCanvas(displayWidth-100,600);
    frameRate(60);
    //Objects
    player = new Player();
    grave = new Grave();
    for (i=0; i<graveCount; i++){
        items.push(new Item());
        setRandomColor(items[i]);
        possibleColors[items[i].c] += 1;
        
        
    }

    colorChange(player);
    //setRandomColor(player);
    //setInterval(timer,1000);
    
    
}

//function is called once per frame
function draw(){
    background('#64C896');
    
    grave.show();
    player.show();
    player.update();
    strings();
    itemDestroy();
    winScenario();
    timer();

    //create multiple dots
    for( item of items){
        
        item.show();
        item.update();
    }

    
}

function itemDestroy(){
    for( item of items){
        var d = floor(dist(player.x,player.y,item.x,item.y));
        
        if( d <=15 ){
            item.y = grave.y;
            item.x = grave.x;
            grave.c = item.c;
            graveCount--;
            combo();
            addPoint();
            colorChange(player);
            
        }
    }       
}


function setRandomColor(obj){
    let  randomColor = random(strokeColors);
        obj.c = randomColor; 
        
}

function colorChange(obj){
    let randomColor = random(strokeColors);  
    if (possibleColors[randomColor] > 0) {
        obj.c = randomColor;
    } else {
        // console.log('recursing, finding new color');
        if (graveCount > 0) {
            colorChange(obj);
        }
    }
}


function strings(){
    textFont('sans-serif');
    var graveString = "Dots left: " + graveCount;
    textSize(18);
    fill(255);
    stroke(10);
    text(graveString,55,height-50,120,20);

    var pointString = "points: " + points;
    textSize(18);
    fill(255);
    stroke(10);
    text(pointString,55,height-30,120,20);

    if(comboCounter > 1){
        var comboString = comboCounter +"x Combo!";
        textSize(18);
        text(comboString,width/2-50, height-25);
        fill(255);
    }

    
}

function winScenario(){
    if(graveCount == 0 ){
        textSize(50);
        fill(255);
        stroke(10);
        text("DONE!",width/2-170,height/2);
    }

}

function addPoint(){
   
    if(player.c == item.c){
        possibleColors[item.c] -= 1;
        points++;
        canCombo = true;
        comboPoints++;   
        comboCounter++;
    }
    else{
        possibleColors[item.c] -= 1;
        points--;
        canCombo = false;
        comboPoints = 0;
        comboCounter = 0
        
    }

}

function combo(){
    if(canCombo == true){
        points += comboPoints;
        
    }
}

function timer(){
    var sec = floor(maxtime -millis()/1000);
   
    if( sec >0){

        var timer ="Time: " +  sec +  " s" ;
    }
    else{
        textSize(50);
        fill(255);
        stroke(10);
        text("Time Up!",width/2-170,height/2);
        player.speed = 0;
    }

    //presentation
    fill(255);
    textSize(20);
    text(timer,width-500,height-25);
}


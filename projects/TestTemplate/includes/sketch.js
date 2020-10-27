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



//Function called when page is load
function setup() {

    var cnv = createCanvas(800,800);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    background(255);

    yAxis = new Axis(400,0,400,800);
    xAxis = new Axis(0,400,800,400);

  }

//function is called once per frame
function draw(){

    for(let i=0; i<=800; i+=40){
      
      //ellipse(i,400,10,10);
      //fill(255,0,0);
      //ellipse(400,i,10,10);
      //fill(255,0,0);
      strokeWeight(1); 
      stroke('#000');
      line(i,390,i,410); 

      strokeWeight(0);
      textSize(12)
      textFont('Georgia');
      text(i/40,i,370);
      textAlign(CENTER,CENTER);

      strokeWeight(1); 
      stroke('#000');
      line(390,i,410,i);
      
       
      
    }
    
    strokeWeight(2); 
    yAxis.show();
    xAxis.show();
}


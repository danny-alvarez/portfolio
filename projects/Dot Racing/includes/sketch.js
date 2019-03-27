var player;
var player2;
var finishline;

function setup(){

    createCanvas(windowWidth - 200,600);
    player = new Player(20,height/2 + 40);
    player2 = new Player2(20,height/2 - 40);
    finishline = width - 100;
}

function draw(){

    background(100,255,100);
    player.display();
    player.c = color(255,100,100);
    player2.display();
    player2.c = color(100,100,255);

    strokeWeight(2);
    stroke(100);
    line(finishline ,0,finishline  ,height);

    winScenario();
   
}


function keyTyped() {
    if(key === "d"){
        player.update();
    }
    if(key === "l"){
        player2.update();
        
    }
}      

    function winScenario(){
        if(player.x >= finishline -20 || player2.x >= finishline - 20){
            console.log("somebody won");
            var winText = "Player Won!"

            fill(0);
            textSize(30);
            text(winText,width/2,height/2);

            noLoop();
        }
    }



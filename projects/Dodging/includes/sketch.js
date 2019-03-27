
var player;
//var enemy;
var enemies = [];
var points = 0;
var time = 0;
var pointsText = "";
function setup(){

    createCanvas(displayWidth - (displayWidth*.5),displayHeight-(displayHeight*.3));
    frameRate(60);
    player = new Player(width/2,height-45,30);
    //enemy = new Enemy(width/2,20,30);
  
     for(i=0; i<= 15; i++){

      enemies.push(new Enemy(random(20,width-20),random(-20,-500),30));
     }
}

function draw(){

    background(100,255,100);

    time++;

    

    if(player.health >=1){
        player.display();
        player.update();

        if(time%30 == 0){
            points++;
            pointsText = "Score:" + points;
        }
    
    }
   
    
    for(enemy of enemies){
            
        enemy.display();
        enemy.update();
        enemy.reposition();
        collision(enemy);
    }

    fill(0)
    textSize(20)
    text(pointsText, 20,20);
    
    
}

function collision(other){
    var d = dist(player.x,player.y,other.x,other.y);

    if(d < player.radius - .5 ){
        player.health --;
    }
}

var player;
var enemies = [];
var item;
var numEnemies = 15;
var playerHit = false;
var itemCapture = false;
var win = false;
var startingEnemy;
function setup(){

    createCanvas(1200,600);
    frameRate(60);
    player = new Player();
    item = new Item();

    
    for( let i = 0; i < numEnemies; i++){
        
        
        enemies.push(new enemy);
        enemies[0].x = 110;
        for ( i=1; i< enemies.length; i++){
            
            enemies[i].x += 80;
        }
    }
    

}

function draw(){
    background(255);

    if( itemCapture == false){
        item.show();
        
    }
    else{
        fill("#3fa640");
        rect(0,0,80, height);
        stroke(170);
        strokeWeight(4);
        line(80,0, 80, height);
    }
    
    
    if(playerHit == false){
        player.show();
        player.update();
    }
    
   
    for (enemy of enemies){
        
        enemy.show();
        enemy.update();
        collision();

    }

    
  
    captureItem();
    gameOver();
}


function collision(){

    var d = floor(dist(player.x,player.y,enemy.x,enemy.y));
    
        if( d <=15 ){
            
            playerHit = true;
                
        }
    
    
}

function captureItem(){
    var d = floor(dist(player.x,player.y,item.x,item.y));
    if(d <= 15){
        itemCapture = true;
        
    }

    if( player.x <= 60 && itemCapture == true){

        win = true
        player.speed = 0;
    }

}

function gameOver(){

    if( playerHit == true){

        fill("#a43b3b");
        stroke(0)
        gameOverText = " GAME OVER! ";
        textSize(50);
        text(gameOverText, width/2-200, height/2);

        fill(0);
        stroke(255);
        refreshText = " Refresh to start over (CTRL R) ";
        textSize(20);
        text(refreshText, width/2-165, height/2 + 20); 
        
    }

    if(win == true){

        fill("#3fa640");
        stroke(0)
        gameOverText = " YOU WIN! ";
        textSize(50);
        text(gameOverText, width/2-200, height/2);

        fill(0);
        stroke(255);
        refreshText = " Refresh to start over (CTRL R) ";
        textSize(20);
        text(refreshText, width/2-185, height/2 + 20); 

    }
}




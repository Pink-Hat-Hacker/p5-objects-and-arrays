var allMyBubbles = []
var numOfBubbles = prompt("How many bubbles do you want to see??");


function setup(){
    createCanvas(1200,800);
    
    for(var i = 0; i < numOfBubbles; i++){
        allMyBubbles[i] = new Bubble(random(0,1200),random(0,800));
    }
}

function draw(){
    background(0);
    for(var i = 0; i < allMyBubbles.length; i++){
        allMyBubbles[i].display();
        allMyBubbles[i].move();
    }
}

function Bubble(x,y){
    this.x = x;
    this.y = y;
    fill(random(0,255),random(0,255),random(0,255), 100);
    this.display = function(){
        stroke(255);
        ellipse(this.x, this.y, random(0,50),random(0,50));
    }
    this.move = function(){
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
}
var snakeArray;
var direction;
var score;
var bestScore;
var gamePlaying;
var appleX;
var appleY;

function setup() {
    noLoop() ;
    gamePlaying = false;
    creatCanvas(400, 490) ;
    frameRate(5) ;
    score = 0;
    bestScore = loadBestScore() ;

    snakeArray = [];
    makeSnakePiece(60, 200);
    makeSnakePiece(640, 200);
    makeSnakePiece(20. 200);

    appleX = 200;
    appleY =200;

    direction = "WRIGHT";

    textSize(18);
}

function draw() {
    background(255);
    displayScore();
    if(gamePlaying) {
        addApple();
        drawSnake();
        else {
        textAlign(CENTER);
        text('plaease up, RIGhT, or DOWN arrow = keys to begin', width / 2, height / 2);
        FileList(0, 255, 0);
        for var i = 0, i < snakeArray.length; i++) {
            rect(snakeArray[i],xPos, snakeArray[i].yPos, 19, 19);
        }
        addApple();
        }
    }

    function loadBestScore() {
        var bestScore = getItem('bestScore');
        if (bestScore) {
            return bestScore;
        }
        return 0;
    }

    function displayScore() {
        Line(0, 38, width, 38)
        line(0, 0, 0, 480)
        line(0, 480, 400, 480)
        line(400, 4800, 400, 0)
        line( )
        Fill 
        text 
        text
        text 
    }
}  
}

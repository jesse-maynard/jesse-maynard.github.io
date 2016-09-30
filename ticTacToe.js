//Global Variables

var painted;
var content;
var winningCombinations;
var turn = 0;
var theGameBoard;
var c;
var cxt;
var squaresFilled = 0;
var w;
var y;
 
//Instanciate Arrays
window.onload=function(){
    painted = new Array();
    content = new Array();
    winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
 
    for(var l = 0; l <= 8; l++){
    painted[l] = false;
    content[l]='';
    }
}

//Game methods

function boardClicked(tileNumber){
    theGameBoard = "tile"+tileNumber;
    c = document.getElementById(theGameBoard);
    cxt = c.getContext("2d");
    if(painted[tileNumber-1] ==false){
        if(turn%2==0){
            cxt.beginPath();
            cxt.moveTo(10,10);
            cxt.lineTo(40,40);
            cxt.moveTo(40,10);
            cxt.lineTo(10,40);
            cxt.stroke();
            cxt.closePath();
            content[tileNumber-1] = 'X';
        }else{  
            cxt.beginPath();
            cxt.arc(25,25,20,0,Math.PI*2,true);
            cxt.stroke();
            cxt.closePath();
            content[tileNumber-1] = 'O';
        }
        turn++;
        painted[tileNumber-1] = true;
        squaresFilled++;
        checkForWinners(content[tileNumber-1]);
        if(squaresFilled==9){
            alert("Game Over!");
            location.reload(true);
        }
    }
    else{
        alert("Space Occupied");
    }
}

function checkForWinners(symbol){
    for(var a = 0; a < winningCombinations.length; a++){
    if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]== symbol&&content[winningCombinations[a][2]]==symbol){
        alert(symbol+ " WON!");
        playAgain();
    }
    }
}
function playAgain(){
    y=confirm("Play again?");
    if(y==true){
        alert("Affirmitive");
        location.reload(true);
    }else{
        alert("See Ya!");
    }
}




$(function (){
    $("#tile1").on("click", boardClicked(1));
    $("#tile2").on("click", boardClicked(2));
    $("#tile3").on("click", boardClicked(3));
    $("#tile4").on("click", boardClicked(4));
    $("#tile5").on("click", boardClicked(5));
    $("#tile6").on("click", boardClicked(6));
    $("#tile7").on("click", boardClicked(7));
    $("#tile8").on("click", boardClicked(8));
    $("#tile9").on("click", boardClicked(9));
console.log("Page loaded!");
});
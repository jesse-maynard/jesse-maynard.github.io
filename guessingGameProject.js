var input1;
var input2;
var input3;
var answer1;
var answer2;
var answer3;
var lives;

function guessButton_Click(){
input1 = $("#num1").val();
input2 = $("#num2").val();
input3 = $("#num3").val();
console.log(input1);
console.log(input2);
console.log(input3);
//Handling the Input Boxes!
if(input1 == answer1){
    $("#num1").removeClass("numInput");
    $("#num1").addClass("numInput2");
} else if(input1 == answer2 || input1 == answer3){
    $("#num1").removeClass("numInput");
    $("#num1").addClass("numInput1");

} else if(input1 != answer1 || input1 != answer2 || input1 != answer3){
    $("#num1").removeClass("numInput");
    $("#num1").addClass("numInput3");
document.getElementById('lifeCounter').innerHTML = lives-- 
}
if(input2 == answer2){
    $("#num2").removeClass("numInput");
    $("#num2").addClass("numInput2");
} else if(input2 == answer1 || input2 == answer3){
    $("#num2").removeClass("numInput");
    $("#num2").addClass("numInput1");
} else if(input2 != answer1 || input2 != answer2 || input3 != answer3){
    $("#num2").removeClass("numInput");
    $("#num2").addClass("numInput3");
}
document.getElementById('lifeCounter').innerHTML = lives-- 
if(input3 == answer3){
    $("#num3").removeClass("numInput");
    $("#num3").addClass("numInput2");
} else if(input3 == answer2 || input3 == answer1){
    $("#num3").removeClass("numInput");
    $("#num3").addClass("numInput1");
} else if(input3 != answer1 || input3 != answer2 || input3 != answer3){
    $("#num1").removeClass("numInput");
    $("#num1").addClass("numInput3");
}
document.getElementById('lifeCounter').innerHTML = lives-- 
//Win or Lose

if(document.getElementById('lifeCounter').innerHTML == 0){
    alert("You have met your fate at the 'hands' of the Ithorian!");
    location.reload();
} else if(input1 == answer1 && input2 == answer2 && input3 == answer3){
    alert("CURSE YOU ADVENTURER! I'LL GET YOU NEXT TIIIIMMMMMEEEE!!!");
}

}


function setUpGame(){
        answer1 = parseInt(Math.random() * 9);
        answer2 = parseInt(Math.random() * 9);
        answer3 = parseInt(Math.random() * 9);
        if(answer2 == answer1){
            answer2++
        } 
        if(answer2 == answer1 && answer2 == 9){
            answer2--
        }
        if(answer3 == answer2 || answer3 == answer1 ){
            answer3++
        }
        if(answer3 == answer2 || answer3 == answer1 && answer3){
            answer3--
        }

    lives = 10
    document.getElementById('lifeCounter').innerHTML = lives-- 
    console.log("Cheater! Don't you dare enter " + answer1);
    console.log("or " + answer2);
    console.log("OR... " + answer3);



}

/*function handleGuess(){
    var guess = $("#tbxGuess").val();
    if (+guess == answer) {
        alert("You've escaped me this time!");
    } else {
        alert("You've met your fate at the 'hands' of the Ithorian");
    }
}
*/
$(function(){
    $("#guessButton").on("click", guessButton_Click)

    setUpGame();

});




var turn= 0;



function gameBoardA1_Click(){  
   document.getElementById('a1').innerHTML = "X";
   console.log("This is working!");
}
function gameBoardA2_Click(){  
   document.getElementById('a2').innerHTML = "X";
   console.log("This is working!");
}
function gameBoardA3_Click(){  
   document.getElementById('a3').innerHTML = "X";
   console.log("This is working!");
}
function gameBoardB1_Click(){  
   document.getElementById('b1').innerHTML = "X";
   console.log("This is working!");
}
function gameBoardB2_Click(){  
   document.getElementById('b2').innerHTML = "X";
   console.log("This is working!");
}
function gameBoardB3_Click(){  
   document.getElementById('b3').innerHTML = "X";
   console.log("This is working!");
}
function gameBoardC1_Click(){  
   document.getElementById('c1').innerHTML = "X";
   console.log("This is working!");
}
function gameBoardC2_Click(){  
   document.getElementById('c2').innerHTML = "X";
   console.log("This is working!");
}
function gameBoardC3_Click(){  
   document.getElementById('c3').innerHTML = "X";
   console.log("This is working!");
}

$(function (){
    $("#a1").on("click", gameBoardA1_Click)
    $("#a2").on("click", gameBoardA2_Click)
    $("#a3").on("click", gameBoardA3_Click)
    $("#b1").on("click", gameBoardB1_Click)
    $("#b2").on("click", gameBoardB2_Click)
    $("#b3").on("click", gameBoardB3_Click)
    $("#c1").on("click", gameBoardC1_Click)
    $("#c2").on("click", gameBoardC2_Click)
    $("#c3").on("click", gameBoardC3_Click)
});



function totalButton_Click(num1, num2, num3){
      
        
        var num1 = $("#billTotal").val();
        var num2 = $("#numPeople").val();
        var num3 = $("#tipAmount").val();
 
        var tipResult = num1 * ("." + num3);
        var result = parseInt(num1) + parseInt(tipResult);
        var grandTotal = result / num2;


        if (num1 == 0) {
                alert("You must enter your bill amount first!");
        } else {
       document.getElementById('total').innerHTML = "Total: $ " + result.toFixed(2);
        document.getElementById('totalPerPerson').innerHTML = "Total Per Person: $ " + grandTotal.toFixed(2);
        document.getElementById('tip').innerHTML = "Tip: $ " + tipResult.toFixed(2);
        }
        
       
        console.log(result);
        console.log(tipResult);
        console.log(grandTotal);

}

function emptyBox(){
        document.getElementById('billTotal').value = "";
}

function clearFields(){
        document.getElementById('billTotal').value = "0.00";
        document.getElementById('numPeople').value = "1";
        document.getElementById('tipAmount').value = "Tip %";
        $("#total").empty();
        $("#totalPerPerson").empty();
        $("#tip").empty();
}

$(function(){
        $("#totalButton").on("click", totalButton_Click)
        $("#billTotal").on("click", emptyBox)
        $("#clearButton").on("click", clearFields)
});
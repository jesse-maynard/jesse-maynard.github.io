function onlyNumbers(){
    return event.charCode >= 48 && event.charCode <= 57
}

$(function(){
    $("#numInput").on("keypress", onlyNumbers)
});

$("#sizePicker").submit(function makeGrid(event) {
    $('table tr').remove(); 

    var gridHeight = $("#inputHeight").val();
    var gridWidth = $("#inputWeight").val();

    for (var i = 1; i <= gridHeight; i++){
        $("table").append("<tr></tr>");
        for (var j = 1; j <= gridWidth; j++){
            $("tr:last").append("<td></td>");
            $("td").attr("class","pixel");
        };
    }   
event.preventDefault();
});


var designCanvas = $("#pixelCanvas");

designCanvas.on("click",".pixel",function(){
    var colorInput = $("#colorPicker").val();
    $(this).css("background-color", colorInput);
})
var selectBox = document.getElementById("characterSelect");
var image = document.getElementById("characterImage");

selectBox.onchange = function () {

    var character = selectBox.value;

    if (character !== "") {
        image.src = "images/" + character + ".jpg";
    }

};
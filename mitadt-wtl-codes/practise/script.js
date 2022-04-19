
var addButton = document.createElement("button");
addButton.innerHTML = "Click the new button"
addButton.addEventListener('click', function(){
    alert("The new button was clicked");

})


function showButton(){
    var divButtonShow = document.getElementById("div-show-button");
    divButtonShow.appendChild(addButton);
}
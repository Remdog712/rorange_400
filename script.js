window.addEventListener('DOMContentLoaded', init, false);

function init() {
    alert('Welcome to my Javascript Influenced Portfolio Website');
    
    var fontColorButton = document.getElementById('fontColorButton');
    var boldButton = document.getElementById('hightlightbutton');
    var bgColorButton = document.getElementById('bgColorButton');
    
    fontColorButton.addEventListener('click', changeFontColor, false);
    boldButton.addEventListener('click', highlightParagraph, false);  
    bgColorButton.addEventListener('click', changeBackgroundColor, false);
}

function changeFontColor() {
    var sectionTitle = document.querySelector('#testing-js h2');
    sectionTitle.style.color = "lightgrey";
}

function highlightParagraph() {
    var paragraph = document.querySelector('#testing-js p');  
    paragraph.style.backgroundColor = "yellow"; 
}

function changeBackgroundColor() {
    var section = document.getElementById('testing-js');
    section.style.backgroundColor = "orange";
}

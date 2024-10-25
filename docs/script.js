window.addEventListener('DOMContentLoaded', init, false);

function init() {
    alert('Welcome to my Javascript Influenced Portfolio Website');
    
    var fontColorButton = document.getElementById('fontColorButton');
    var boldButton = document.getElementById('hightlightbutton');
    var bgColorButton = document.getElementById('bgColorButton');
    var toggleColorCheckbox = document.getElementById('toggleColorCheckbox');
    var removeTextCheckbox = document.getElementById('removeTextCheckbox');
   
    fontColorButton.addEventListener('click', changeFontColor, false);
    boldButton.addEventListener('click', highlightParagraph, false);  
    bgColorButton.addEventListener('click', changeBackgroundColor, false);

    toggleColorCheckbox.addEventListener('change', toggleName, false);
    removeTextCheckbox.addEventListener('change', toggleParagraphTextColor, false);



// Javascript Exercise 2 - Start
    highlightNamesCheckbox.addEventListener('change', toggleHighlight, false);
    highlightPlacesCheckbox.addEventListener('change', toggleHighlight, false);
    highlightHobbyCheckbox.addEventListener('change', toggleHighlight, false);
}

function toggleName() {
    var mainTitle = document.getElementById('mainTitle');
    mainTitle.style.color = this.checked ? "orange" : ""; 
}

function toggleParagraphTextColor() {
    var paragraph = document.getElementById('toggleTextParagraph');
    paragraph.style.color = this.checked ? "lightgrey" : ""; // Hehe it's just a prank
}

function toggleHighlight() {
    var targetClass;
    switch (this.id) {
        case "highlightNamesCheckbox":
            targetClass = "name";
            break;
        case "highlightPlacesCheckbox":
            targetClass = "place";
            break;
        case "highlightHobbyCheckbox": 
            targetClass = "hobby";
            break;
    }
    var elements = document.getElementsByClassName(targetClass);
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("highlight");
    }
}
// Javascript Exercise 2 - End

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
    section.style.backgroundColor = "#A2AAAD";
}

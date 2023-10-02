// Change Text
const texts = [
    "Founder of Psociety Studio",
    "Programmer",
    "Web Designer",
    "Game Designer"
];

var randomText = document.getElementById("randomText");
var i = 0

function changeText(){
    randomText.textContent = texts[i];
    i = (i + 1) % texts.length;
}

changeText();

setInterval(changeText, 2000)
// Select random word from array and display characters of word with '_' 
window.onload = function(){

var WordsArray = ["apple", "cherry", "blueberry", "pecan", "pizza", "peach"] 
var RandoWord = Math.floor(Math.random() * WordsArray.length)
var wordX = WordsArray[RandoWord]
var WordChars = wordX.split("")
var Underscore = []
for (var i =0; i < WordChars.length; i++) {
    Underscore.push("_ ")
}

var StrChars = Underscore.join("")
document.getElementById("output").innerHTML = StrChars

var Guesses = 8
document.getElementById("guesses").innerHTML= Guesses

var 

// enter key
document.addEventListener("keypress", (event) {
    ver KeyWrd = string.fromCharCode(event.keyCode);

    if(KeyWrd.indexOf(RandoWord) > -1) {
        conole.log(true);
    }
}
}



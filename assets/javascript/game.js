

var WordsArray = ["apple", "cherry", "blueberry", "pecan", "pizza", "peach"]; 
var RandoWord = [];
// WordX is the randomly selected word
var wordX = [];
// WordChars is the the word broken down for each character
var WordChars = [];
var wrngGuess = [];
// Underscore uses a for loop to push and underscore in place of each of the characters of the chosen word
var Underscore = [];



function startGame() {
    
    RandoWord = Math.floor(Math.random() * WordsArray.length);
    wordX = WordsArray[RandoWord];
    WordChars = wordX.split("");
    
    for (var i =0; i < WordChars.length; i++) {
        Underscore.push("_ ")
    
    };

    var StrChars = Underscore.join("");
    document.getElementById("output").innerHTML = StrChars;

    console.log(WordChars);
}



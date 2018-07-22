// Select random word from array and display characters of word with '_' 

var WordsArray = ["apple", "cherry", "blueberry", "pecan", "pizza", "peach"] 
var RandoWord = Math.floor(Math.random() * WordsArray.length)
var wordX = WordsArray[RandoWord]
var WordChars = wordX.split("")
var Underscore = []
for (var i =0; i < WordChars.length; i++) {
    Underscore.push("_ ")
}

console.log (RandoWord)
console.log (Underscore)
var stringChars = Underscore.join("")
document.querySelector(".Word-ShowChar").innerHTML = stringChars

document.querySelector(".guesses").innerHTML = Underscore
var guesses=10

// Show the amount of Guesses remaining
// Listen for player typing letters
// Add letters in place of '_'. Otherwise Remove 1 guess and document the wrong guesses

window.onload = function() {

var WordsArray = ["apple", "cherry", "blueberry", "pecan", "pizza", "peach"] 
var RandoWord = Math.floor(Math.random() * WordsArray.length)
// WordX is the randomly selected word
var wordX = WordsArray[RandoWord]
// WordChars is the the word broken down for each character
var WordChars = wordX.split("")
// Underscore uses a for loop to push and underscore in place of each of the characters of the chosen word
var Underscore = []
for (var i =0; i < WordChars.length; i++) {
    Underscore.push("_ ")

}
// strChars is a variable that joins together all of the Underscores (each representative of a character in the chosen word)
var StrChars = Underscore.join("")
document.getElementById("output").innerHTML = StrChars
// Guesses is a variable for the amount of guesses that you have to complete the word without the game ending
var Guesses = 8
document.getElementById("guesses").innerHTML= Guesses

// Below is where I will code the interactive aspect of the word-guessing-game

// firstly I need to have the browser recognize when someone has typed a letter and create a variable for that guess
document.addEventListener("keyup", function(event) {
    var x = event.charCode || event.keyCode;
    var guess = String.fromCharCode(x);   
    console.log(x)
   
 // secondly I will structure am IF statement that will say that if the guess is correct it will replace the underscore in the 'strChars' string   
    
    console.log(guess)
    console.log(WordChars)
    if (guess == wrdCmp) { 
    alert("correct") }
   



})
}







//then I will tell it that if the guess was not true, 1 will be subtracted from the guesses number

// I will tell the game that when the guesses number reaches '0' then an alert will tell the user that they have lost the game and it will stop the function


// Don't forget that I need to display the incorrect guesses so that the user knows what they have already tried to guess in the game

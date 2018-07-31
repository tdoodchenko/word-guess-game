window.onload = function() {

var WordsArray = ["apple", "cherry", "blueberry", "pecan", "pizza", "peach"] 
var RandoWord = Math.floor(Math.random() * WordsArray.length)
// WordX is the randomly selected word
var wordX = WordsArray[RandoWord]
// WordChars is the the word broken down for each character
var WordChars = wordX.split("")
var wrngGuess = [];
// Underscore uses a for loop to push and underscore in place of each of the characters of the chosen word
var Underscore = []
for (var i =0; i < WordChars.length; i++) {
    Underscore.push("_ ")

}
var losses = [0];
document.getElementById("losses").innerHTML = losses
var wins = [0];
document.getElementById("wins").innerHTML = wins
// strChars is a variable that joins together all of the Underscores (each representative of a character in the chosen word)
var StrChars = Underscore.join("")
document.getElementById("output").innerHTML = StrChars

var Guesses = 8
document.getElementById("guesses").innerHTML= Guesses


document.addEventListener("keyup", function(event) {
    var guess = event.key; 
       
    console.log(WordChars)
    console.log(guess)
     
   var foundLetter = false
   for (var i = 0; i < WordChars.length; i++) {
      if (guess === WordChars[i]) {
        Underscore[i] = guess;
        document.getElementById("output").innerHTML = Underscore.join("")
        foundLetter = true;

      }
               
    }
    if (!foundLetter) {
        Guesses--;
        wrngGuess.push(guess)
        document.getElementById("guesses").innerHTML = Guesses;
        document.getElementById("wrong").innerHTML = wrngGuess.join("")
            }
        
     if (Guesses < 1) {
      losses++;
      document.getElementById("losses").innerHTML = losses
    


     }
     })      
    
    
}









//then I will tell it that if the guess was not true, 1 will be subtracted from the guesses number

// I will tell the game that when the guesses number reaches '0' then an alert will tell the user that they have lost the game and it will stop the function


// Don't forget that I need to display the incorrect guesses so that the user knows what they have already tried to guess in the game

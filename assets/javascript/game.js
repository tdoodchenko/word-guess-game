// javascript for word guessing game 



//create array of words 
// variables

    // code

    var WordsArray = ["apple", "cherry", "blueberry", "pecan", "pizza", "peach"] 
    var RandoWord = Math.floor(Math.random() * WordsArray.length)
    var Word = WordsArray[RandoWord]
    var WordChars = word.split("")
    var Underscore = []
    for (var i=0; i<WordChars.length; i++) {
        Underscore.push("_ ")
    }

    document.getElementById("display-word").innerHTML = (Underscore);
    var 
    
}}
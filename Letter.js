var inquirer = require("inquirer");
// Array of letters in the english alphabet...
var possibleLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r,','s','t','u,','v','w','x','y','z'];
var guessesLeft;
var guesses = 3;
var letterToMatch = [Math.floor(Math.random() * possibleLetters.length)];
console.log(letterToMatch);

// Defining constructor of Letter...
function Letter(letter) {
    this.letter = letter;
    // this.goodGuess = function (letter) {
    //     if(letter){

    //     };
    // };
    // this.printLetter = function () {

    // };
};

// Creating a printInfo method and appling to all of Letter obejcts...
Letter.prototype.toString = function () {
    console.log("Letter: " + this.letter)
};

// Starting the prompt to ask for a guess...
inquirer.prompt([{
    name: "letter",
    message: "Whats the letter?",
    validate: function (value) {
        var pass = value.match(/[a-z]/);
        if (pass) {
            return true;
        }
        return false;
    }
}]).then(function (answers) {
    // initializes the variable newLetter to be a letter object which will take in all of the user's answers to the questions above...
    var newLetter = new Letter(answers.letter);
    // printInfo method is run to show that the newLetter object was successfully created and filled...

    if (newLetter === letterToMatch) {
        newLetter.toString();
        console.log('hi');
    }else{
        console.log('dead');
    }
    
})

// Exporting the Letter constructor which we will use in index.js...
// module.exports = Letter;
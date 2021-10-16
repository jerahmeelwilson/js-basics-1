
//Setup for gathering user input from console.
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function containsAnumber (input){
    //regular expression that is used to searched for characters 1-9, will return all matches
    const regex = /[1-9]/g;
    //returns null if there is no number, returns an array of matched characters if there numbers in string
    return input.match(regex);
}

//Welcome the user
console.log("Hello, welcome the Password Validator tool.");
//Prompt the user for a password to validate
reader.question("Please enter a password to validate: ", function(input){
    //Check if the user's password is at least 10 characters long"
    if(input.length < 10 && containsAnumber(input) == null){
        console.log("Please enter a password that is atleast 10 characters long and contains atleast one number.")
    } else if (input.length < 10) {
        console.log("Please enter a password that is atleast 10 characters long");
    } else if (containsAnumber(input) == null){
        console.log("Please enter a password that contains atleast one number.")
    } else {
        console.log("Your passwords meets all requirements");
    }
    reader.close();
});





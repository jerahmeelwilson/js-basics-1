
//Setup for gathering user input from console.
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function containsAnumber (input){
    }

//Welcome the user
console.log("Hello, welcome the Password Validator tool.");
//Prompt the user for a password to validate
reader.question("Please enter a password to validate: ", function(input){
    //Check if the user's password is at least 10 characters long"
    if(input.length < 10 && containsAnumber(input) == false){
        console.log("Please enter a password that is atleast 10 characters long and contains atleast one number.")
    } else if (input.length < 10) {
        console.log("Please enter a password that is atleast 10 characters long");
    } else if (containsAnumber(input) == false){
        console.log("Please enter a password that contains atleast one number.")
    } else {
        console.log("Your passwords meets all requirements");
    }
    reader.close();
});





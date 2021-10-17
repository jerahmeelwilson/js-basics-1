
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
console.log("Please enter a password that contains atleast one number and is atleast 10 characters long.")
//Prompt the user for a password to validate
reader.question("Enter a password to validate: ", function(input){
    //Check if the user's password is at least 10 characters long and containsAnumber returns null"
    if(input.length < 10 && containsAnumber(input) == null){
        //If both contraints fail
        console.log("Please enter a password that is atleast 10 characters long and contains atleast one number.")
    } else if (input.length < 10) {
        //If password is only less than ten characters but can still has a number
        console.log("Please enter a password that is atleast 10 characters long");
    } else if (containsAnumber(input) == null){
        //If password is only does not contain a number
        console.log("Please enter a password that contains atleast one number.")
    } else {
        console.log("Your passwords meets all requirements");
        console.log(`
        PPPPPP                                                    dd      AAA                                tt                dd !!! 
        PP   PP   aa aa  sss   sss  ww      ww  oooo  rr rr       dd     AAAAA    cccc   cccc   eee  pp pp   tt      eee       dd !!! 
        PPPPPP   aa aaa s     s     ww      ww oo  oo rrr  r  dddddd    AA   AA cc     cc     ee   e ppp  pp tttt  ee   e  dddddd !!! 
        PP      aa  aaa  sss   sss   ww ww ww  oo  oo rr     dd   dd    AAAAAAA cc     cc     eeeee  pppppp  tt    eeeee  dd   dd     
        PP       aaa aa     s     s   ww  ww    oooo  rr      dddddd    AA   AA  ccccc  ccccc  eeeee pp       tttt  eeeee  dddddd !!! 
                          sss   sss                                                                  pp                               
        `)
    }
    reader.close();
});





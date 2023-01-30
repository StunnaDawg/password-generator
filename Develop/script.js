// Assignment Code
var generateBtn = document.querySelector("#generate"); //assigns generateBtn on to the event listener so it is clickable

function generatePassword() {
  prompt('hi')
  prompt('hi again')
  prompt('hi x3')
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //generate password function will create random password depending on the users choice.
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //takes the generate() function and passes it on to the query.Selector
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); //when button is clicked calls write password function.

// Assignment Code
var generateBtn = document.querySelector("#generate"); //assigns generateBtn on to the event listener so it is clickable

function generatePassword() {
  alert('What password criteria');
  alert('Character Types');
  passwordLength();
  passwordLowercase();
  passwordUppercase();
  passwordNumeric();
  passwordSpecial();
} 

/* password length function that will ask how many characters you want in your password */
function passwordLength() {
  // while true keeps the function looping until the question is answered correctly
  while (true) {
  let userInput= prompt('Password length. Choose between 8 - 128')
  userInput = parseInt(userInput)
  // for loop, loops till input == i
  if (userInput >= 8 && userInput <= 128) {
  for (let i = 8; i <= userInput; i++) {
    console.log()
  } break;
} else {
  alert ("Invalid input. Choose a number between 8 and 128.")
} 
}
}

//lowercase characters?

function passwordLowercase () {
  prompt('Do you want lower case letters? y = yes & n = no')
}

//upper case letters? 

function passwordUppercase() {
  prompt('Do you want upper case letters? y = yes & n = no')
}

// numeric characters?

function passwordNumeric() {
  prompt('Do you want numeric characters? y = yes & n = no')
}

//Do you want special characters? 

function passwordSpecial() {
  prompt('Do you want special characters? y = yes & n = no')
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //generate password function will create random password depending on the users choice.
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //takes the generate() function and passes it on to the query.Selector
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); //when button is clicked calls write password function.

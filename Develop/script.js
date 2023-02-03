// Assignment Code
var generateBtn = document.querySelector("#generate"); //assigns generateBtn on to the event listener so it is clickable

function generatePassword() {
  alert('Choose your Password Critera!');
  let characters = ''
  let length = passwordLength();
  let lowerCase = passwordLowercase();
  let upperCase = passwordUppercase();
  let numeric = passwordNumeric();
  let special = passwordSpecial();
  let result = ''

//result += makes sure that 1 of each character is added within the function
//characters + adds its corresponding characters to the string
  if (lowerCase== 'y') {
  characters += 'abcdefghijklmnopqrstuvwxyz'
  result += 'abcdefghijklmnopqrstuvwxyz'.charAt(Math.floor(Math.random() * 26)); 
  }

if (upperCase == 'y') {
  characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  result += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(Math.floor(Math.random() * 26));
  }

if (numeric == 'y') {
  characters += '0123456789'
  result += '0123456789'.charAt(Math.floor(Math.random() * 10));
  }

if (special == 'y') {
  characters += '!@#$%^&*?-'
  result += '!@#$%&?-'.charAt(Math.floor(Math.random() * 8));
  }

//Generates the Passwordlength as well as randomzies it to be outputted

    function generatePasswordLength() {
        const charactersLength = characters.length
        let counter = 0
        while (counter <= length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
   }

      result = result.slice(0, length); //removes 4 random string characters because result+ in the if statements above adds 4 characters to the total

      if (lowerCase == 'n' && upperCase == 'n' && numeric == 'n' && special == 'n') {
        alert('At least 1 charcter type should be selected. PLEASE TRY AGAIN.')
   }
   }
   generatePasswordLength();
 
   
//randomized the result so that the 1st few characters arent in the same order every time

   function randomizeResult(result) {
    result = result.split('').sort(function(){return 0.5-Math.random()}).join('');
    return(result);
  }
  
  result = randomizeResult(result);

return(result);
}

// password length function that will ask how many characters you want in your password 
function passwordLength() {
  // while true keeps the function looping until the question is answered corre
  while (true) {
  let userInput= prompt('Password length. Choose between 8 - 128')
  userInput = parseInt(userInput)
  // for loop, loops till input == i
  if (userInput >= 8 && userInput <= 128) {
  for (let i = 8; i <= userInput; i++) {
    return (userInput);
  } break;
} else {
  alert ("Invalid input. Choose a number between 8 and 128.")
} 
}
}

//lowercase, uppercase, numeric, and special chaarcters all utilize the same function
// They ask whether the user wants their corresponding characters to be added
//while (true) makes sure the function loops if an incorrect input is given

function passwordLowercase () {
  while (true) {
    let userInput = prompt('Do you want lower case letters? y = yes & n = no')
    userInput = userInput.toString().toLowerCase()
    if (userInput === 'y') {
      alert('lower case will be included')
      return userInput;
      break;
    } else if (userInput === 'n') {
      alert('lower case will not be included')
      return userInput;
      break;
    } else {
      alert('Invalid input. Please enter y or n')
    }
  }
  }


//upper case letters? 

function passwordUppercase() {
  while (true) {
    let userInput = prompt('Do you want upper case letters? y = yes & n = no')
    userInput = userInput.toString().toLowerCase()
    if (userInput === 'y') {
      alert('upper case will be included')
      return userInput;
      break;
    } else if (userInput === 'n') {
      alert('upper case will not be included')
      return userInput;
      break;
    } else {
      alert('Invalid input. Please enter y or n')
    }
  }
}

// numeric characters?

function passwordNumeric() {
  while (true) {
    let userInput = prompt('Do you want numeric characters? y = yes & n = no')
    userInput = userInput.toString().toLowerCase()
    if (userInput === 'y') {
      alert('numeric characters will be included')
      return userInput;
      break;
    } else if (userInput === 'n') {
      alert('numeric characters will not be included')
      return userInput;
      break;
    } else {
      alert('Invalid input. Please enter y or n')
    }
  }
}

//Do you want special characters? 

function passwordSpecial() {
  while (true) {
    let userInput = prompt('Do you want special characters? y = yes & n = no')
    userInput = userInput.toString().toLowerCase()
    if (userInput === 'y') {
      alert('special characters will be included')
      return userInput;
      break;
    } else if (userInput === 'n') {
      alert('special characters will not be included')
      return userInput;
      break;
    } else {
      alert('Invalid input. Please enter y or n')
    }
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //generate password function will create random password depending on the users choice.
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //takes the generate() function and passes it on to the query.Selector
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); //when button is clicked calls write password function.

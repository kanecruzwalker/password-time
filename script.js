// TODO: Write code so the generatePassword returns a string for a password

// select button and give it a listener
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function getLengthOfPassword() {
  // () => boolean
  let userLengthChoice = prompt(
    "How many characters do you wish to include in your password"
  );

  if (userLengthChoice >= 8 && userLengthChoice <= 128) {
  } else {
    alert("Please choose a number between 8 and 128");
    return getLengthOfPassword();
  }
  return userLengthChoice;
}

function getUsersDesiredFunctions() {
  // Let user decide preferences
  const desiredLowerCase = confirm(
    "Do you want your password to include lowercase letters?"
  );
  if (desiredLowerCase !== true) {
    alert("Your password will not contain lower case letters");
  }
  const desiredUpperCase = confirm(
    "Do you want your password to include uppercase letters?"
  );
  if (desiredUpperCase !== true) {
    alert("Your password will not contain UPPER CASE LETTERS");
  }
  const desiredNumbers = confirm(
    "Do you want your password to include numbers Numbers?"
  );
  if (desiredNumbers !== true) {
    alert("Your password will not contain any numbers");
  }
  const desiredSpecialCharacters = confirm(
    "Do you want your password to include special characters letters?"
  );
  if (desiredSpecialCharacters !== true) {
    alert("Your password will not include symbols");
  }

  // Add users preferences to an array
  let usersDesiredFunctions = [];
  if (desiredLowerCase) {
    usersDesiredFunctions.push(getRandomLower);
  }
  if (desiredUpperCase) {
    usersDesiredFunctions.push(getRandomUpper);
  }
  if (desiredNumbers) {
    usersDesiredFunctions.push(getRandomNumber);
  }
  if (desiredSpecialCharacters) {
    usersDesiredFunctions.push(getRandomSymbol);
  }
  if (usersDesiredFunctions.lengths === 0) {
    alert("Must select at least one character type");
    return getUsersDesiredFunctions();
  }
  return usersDesiredFunctions;
}

function generatePassword() {
  let userLengthChoice = getLengthOfPassword();
  let usersDesiredFunctions = getUsersDesiredFunctions();

  let finalPassword = "";

  for (i = 0; i < userLengthChoice; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    let valueToUse = usersDesiredFunctions[randomNumber];
    finalPassword += valueToUse();
  }

  return finalPassword;
}

//getRandomLower
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//getRandomUpper
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//getRandomNumber
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//getRandomSymbol
function getRandomSymbol() {
  var symbols = "!@#$%^&*()_+{}|:<>?/.,;][=-";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//------------------Brainstorming bellow
//WHEN I click the button to generate a password
//generateBtn.addEventListener ('click)
//THEN I am presented with a series of prompts for password criteria
//then discoverUserChoices ["desiredLength" + "desireNumbers" + "desireSymbols" + "desireUpper" + "desireLower"]
// ""
//WHEN prompted for password criteria
// var = desiredLowerCase confirm ("Do you want your password to include lowercase letters?")
// var = desiredUpperCase confirm ("Do you want your password to include uppercase letters?")
// var = desiredNumbers confirm ("Do you want your password to include numbers letters?")
// var = desiredSpecialCharacters confirm ("Do you want your password to include special characters  letters?")
// var = desiredLength prompt("How many passwords characters in password ")
//THEN I select which criteria to include in the password
//  desiredLowerCase, desiredUpperCase, desiredNumbers, desiredSpecialCharacters are all confirm
//  above list should be object, discoverUserChoices
//  if confirm's === true, include in passwordGeneration
//  if confirms !== true, do not include in password generation
//WHEN prompted for character types to include in the password
//desiredCharacterTypes [length, lowercase, uppercase, numeric, special characters]
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//Then values are validadted/logged to be used in final generation

//WHEN I answer each prompt
//desiredCharacterTypes inputs
//THEN my input should be validated and at least one character type should be selected
//require 1 input type to be selected true

//WHEN all prompts are answered
//when desiredCharacterTypes / desiredUsersInput complete
//THEN a password is generated that matches the selected criteria
//then generatePassword using values from desiredCharacterTypes/ desiredUsersInput
// to instruct generatePassword as of to what values to use

//WHEN the password is generated
//when password === made
//THEN the password is either displayed in an alert or written to the page
//alert passwordMade  &or write password on the page

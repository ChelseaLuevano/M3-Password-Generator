// Assignment code here


//assign variables for Password criteria
let validNumbers = [0,1,2,3,4,5,6,7,8,9];
let validLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let validUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let validSpecialCharacters = ['!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_',',','{','|','}','~'];

// random number between 0 - length of array
function getRandom(arr) {
  return arr[Math.floor(Math.random()* arr.length)]
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");


function generatePassword () {
  let password = "";
  let possibleCharacters = [];
  console.log("Hey you clicked the button");

// 1. Prompt user for Password Criteria

// a.   Prompt user for Password Length
let userLength = parseInt(prompt("Enter a Password length between '8' and '128' characters."));
// a.1  Validate the input 
while ((userLength < 8) || (userLength > 128) || isNaN(userLength)){
  userLength = parseInt(prompt("Enter a Password length between '8' and '128' characters."));
}

// b.   Prompt user for Upper Case, Lower Case, Numeric, and Special Chracters
// b1. Upper Case 

  let upperCase = confirm("To include Upper Case Letters in your Password, click 'ok'; Otherwide, click 'cancel'. ");

// b2. Lower Case

  let lowerCase = confirm("To include Lower Case Letters in your Password, click 'ok'; Otherwide, click 'cancel'. ");

// numeric promts
let numeric = confirm("To include numbers in your Password, click 'ok'; Otherwide, click 'cancel'. ");

// special character prompts

let specialCharacters = confirm("To include Special Characters in your Password, click 'ok'; Otherwide, click 'cancel'. ");

// 2. Validate the input

// 3. Generate Password
if (upperCase) {
  possibleCharacters = [...possibleCharacters, ...validUpperCase];
  password += getRandom(validUpperCase);
}

if (lowerCase) {
  possibleCharacters = [...possibleCharacters, ...validLowerCase];
  password += getRandom(validLowerCase);
}

if (numeric) {
  possibleCharacters = [...possibleCharacters, ...validNumbers];
  password += getRandom(validNumbers);
}

if (specialCharacters) {
  possibleCharacters = [...possibleCharacters, ...validSpecialCharacters];
  password += getRandom(validSpecialCharacters);
}

for (let i = password.length; i < userLength; i++) {
  password += getRandom(possibleCharacters);
}

// 4. Display password
  return password
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

// Password will be displayed on screen in password element
  passwordText.value = password;

}


// First Password Generation  
// if (variable) {
//   playGame();
// }


// If user selected outside of length range, 
// if (userLength < 8 || userLength > 128) {
//   return window.prompt("Please enter a Password length between 8 and 128 characters.");
// }

// Prompt user for Upper Case Letters
// let selectedUpper = window.prompt("To include Upper Case Letters in your Password, Enter 'y'; Otherwide, Enter 'N'. ");
// true or false answer..


// Prompt user for Lower Case Letters


// Prompt user for Special Characters

// Function to determine password details based on user inputs
// passwordLength = selectedLength  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
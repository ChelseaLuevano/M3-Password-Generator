// Assignment code here


//assign variables for Password criteria
let numbers = [0,1,2,3,4,5,6,7,8,9];
let lowerCase = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
let upperCase = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
let specialCharacters = ["!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_",",","{","|","}","~"];


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// First Password Generation  
// if (variable) {
//   playGame();
// }

// Prompt user for Password Length
let userLength = window.prompt("Please enter a Password length between 8 and 128 characters.");


// If user selected outside of length range, 
// if (userLength < 8 || userLength > 128) {
//   return window.prompt("Please enter a Password length between 8 and 128 characters.");
// }

// Prompt user for Upper Case Letters
// let selectedUpper = window.prompt("Please enter a Password length between 8 and 128 characters.");
// true or false answer..


// Prompt user for Lower Case Letters


// Prompt user for Special Characters

// Function to determine password details based on user inputs
// passwordLength = selectedLength  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Password result
// window.alert(
  
// );
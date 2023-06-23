// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Creating arrays of available characters for password
  // ? Are there special characters that need to be avoided?

  const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const numbersZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

  // Prompt user for password length
  // ! Must be < 8 and > 128
  // ! Must be integer

  let passwordLength = prompt("Enter your password length: ");
  console.log(passwordLength);
  console.log(Number.isInteger(passwordLength));

  if (passwordLength <= 8 || passwordLength >= 128) {
    alert("Please enter a number between 8 and 128");
  }
  
  // if (Number.isInteger(passwordLength)=false) {
  //   alert("Please enter only an integer between 8 and 128");
  // }


  // Prompt user for character types
  // Do they want lowercase? (Y/N)
  // Do they want uppercase? (Y/N)
  // Do they want numeric? (Y/N)
  // Do they want special? (Y/N)
  // ! If user says No to all, make them pick again with at least 1


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

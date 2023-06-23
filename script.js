// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Creating arrays of available characters for password
  // ? Are there special characters that need to be avoided?

  const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const numbersZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
  let finalPassword="";
  let options = [];

  // Prompt user for password length
  // ! Must be < 8 and > 128
  // ! Must be integer

  // User selects length of password, and forces input to be integer
  let passwordLength = prompt("Enter your password length: ");
  passwordLength = parseInt(passwordLength);

  // Setting length requirements of password
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128");
    return "";
  }
  
  // Prompting user to only select integer values
  if (Number.isInteger(passwordLength)===false) {
    alert("Please enter only an integer between 8 and 128");
    return "";
  }

  // Prompt user for character types
  var lowerCase = confirm("Do you want to include lower case characters?");
  var upperCase = confirm("Do you want to include upper case characters?");
  var numeric = confirm("Do you want to include numeric values?");
  var special = confirm("Do you want to include special characters?");
  
  // If user says No to all, make them pick again with at least 1 character type
  if (!lowerCase && !upperCase && !numeric && !special) {
    alert("You must select at least one character type");
    return "";
  }

  // Each options selected by user gets concatenated into new array
  if (lowerCase) {
    options=options.concat(lowerCaseLetters)
  }
  if (upperCase) {
    options=options.concat(upperCaseLetters)
  }
  if (numeric) {
    options=options.concat(numbersZeroToNine)
  }
  if (special) {
    options=options.concat(specialCharacters)
  }

  // Generates a random number between 0 and 1, then multiplies it by the length of the password length given by the user
  for (let i=0; i<passwordLength;i++){
    let randomchar = options[Math.floor(Math.random()*options.length)]
    finalPassword += randomchar
    console.log(finalPassword);
  }
return finalPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

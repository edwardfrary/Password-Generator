// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passLength = prompt("How long is the password?");
  var lowerCase = prompt("Include lowercase? (Y/N)");
  var upperCase = prompt("Include uppercase (Y/N)");
  var numericCharacters = prompt("Include numeric characters? (Y/N)");
  var specialCharacters = prompt("Include special characters? (Y/N)");

  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

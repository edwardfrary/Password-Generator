var res ="";
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Assignment code here
function randomNumber(){
  return Math.floor(Math.random()*26)+1;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passLength = prompt("How long is the password?");
  var lowerCase = prompt("Include lowercase? (Y/N)");
  if (lowerCase === "Y" || lowerCase === "y" || lowerCase === "YES"){
  res = res.concat(lowerCaseString);
  }
  var upperCase = prompt("Include uppercase (Y/N)");
  var numericCharacters = prompt("Include numeric characters? (Y/N)");
  var specialCharacters = prompt("Include special characters? (Y/N)");


  for (i=0;i <= passLength-1; i++){
    
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

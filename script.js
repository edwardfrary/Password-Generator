var res ="";
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericString = "0123456789";
var specialString = " !#$%&()*+,-./:;<=>?@[]^_`{|}~";

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
  if (upperCase === "Y" || upperCase === "y" || upperCase === "YES"){
    res = res.concat(upperCaseString);
  }

  var numericCharacters = prompt("Include numeric characters? (Y/N)");
  if (numericCharacters === "Y" || numericCharacters === "y" || numericCharacters === "YES"){
    res = res.concat(numericString);
  }

  var specialCharacters = prompt("Include special characters? (Y/N)");
  if (specialCharacters === "Y" || specialCharacters === "y" || specialCharacters === "YES"){
    res = res.concat(specialString);
  }
  console.log(res);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

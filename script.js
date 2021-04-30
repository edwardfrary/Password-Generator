var res = "";
var passWord = "";
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericString = "0123456789";
var specialString = " !#$%&()*+,-./:;<=>?@[]^_`{|}~";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passLength = prompt("How long is the password? (Length: 8 to 128)");

  if (passLength >= 8 && passLength <= 128) {
    var lowerCase = prompt("Include lowercase? (Y/N)");
    if (lowerCase === "Y" || lowerCase === "y" || lowerCase === "YES") {
      res = res.concat(lowerCaseString);
    }

    var upperCase = prompt("Include uppercase (Y/N)");
    if (upperCase === "Y" || upperCase === "y" || upperCase === "YES") {
      res = res.concat(upperCaseString);
    }

    var numericCharacters = prompt("Include numeric characters? (Y/N)");
    if (numericCharacters === "Y" || numericCharacters === "y" || numericCharacters === "YES") {
      res = res.concat(numericString);
    }

    var specialCharacters = prompt("Include special characters? (Y/N)");
    if (specialCharacters === "Y" || specialCharacters === "y" || specialCharacters === "YES") {
      res = res.concat(specialString);
    }
    console.log(res);

    for (i = 0; i < passLength; i++) {
      passWord += res.charAt(Math.floor(Math.random() * res.length));
    }

    console.log(passWord);
    document.getElementById("password").innerHTML = passWord;
    res = "";
    passWord = "";
  }
 else{ alert("Please Try Again");}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

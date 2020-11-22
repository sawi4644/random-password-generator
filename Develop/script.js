// Assignment Code
//starter code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//starter code
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// starting personalized code

function generatePassword(){

var pickedCon = [];
// asking user password criteria
alert('Confirm All Conditions')
var upper = confirm("Use uppercase letters?");
var lower = confirm("Use lowercase letters?");
var specialC = confirm("Use special characters?");
var number = confirm("Use numbers?");

// validating input
while((upper===false) && (lower===false) && (specialC===false) && (number===false)) {
  alert ('Need to Confirm Condition');
  var upper = confirm("Use at least one uppercase letters");
  var lower = confirm("Use at least one lowercase letters");
  var specialC = confirm("Use at least special characters");
  var number = confirm("Use at least one number");
  }


// the acceptable password criteria(array)
var upperCase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ['1','2','3','4','5','6','7','8','9'];
var special = ["\"","!","#","$","%","&","\'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","`","{","|","}","~"];


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

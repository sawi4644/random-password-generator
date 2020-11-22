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

var pickedChar = [];
// asking user password criteria
var upper = confirm("Use uppercase letters?");
var lower = confirm("Use lowercase letters?");
var special = confirm("Use special characters?");
var number = confirm("Use numbers?");



// the acceptable password criteria(array)
var upperCase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ['1','2','3','4','5','6','7','8','9'];
var special = ["\"","!","#","$","%","&","\'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","`","{","|","}","~"];


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

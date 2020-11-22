// Assignment Code
// starting personalized code

function generatePassword(){

var userPick = [];
// asking user password criteria
alert('Confirm All Conditions')
var upper = confirm("Use uppercase letters?");
var lower = confirm("Use lowercase letters?");
var specialC = confirm("Use special characters?");
var number = confirm("Use numbers?");

// while loop will run if one confirm above is canceled
if ((upper===false) && (lower===false) && (specialC===false) && (number===false)) {
  alert ('Need to Confirm Condition');
  var upper = confirm("Use uppercase letters?");
  var lower = confirm("Use at least one lowercase letter");
  var specialC = confirm("Use at least special character");
  var number = confirm("Use at least one number");
  }

  // password length portion
  var passwordAmount = prompt ("How long would you like your password? Please choose between 8-128.");
  if ((passwordAmount < 8) || (passwordAmount > 128)){
    alert("Please choose your password length. Must be between 8-128.");
    passwordAmount = prompt("Choose Length");
  } 

// the acceptable password criteria(array)
var upperCase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ['1','2','3','4','5','6','7','8','9'];
var special = ["\"","!","#","$","%","&","\'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","`","{","|","}","~"];

// uppercase variable
if (upper) {
  for(var i = 0; i < upperCase.length; i++ ){
    userPick.push(upperCase[i]);

  }
}
// lowercase variable
if(lower){
  for(var i=0; i < lowerCase.length; i++){
    userPick.push(lowerCase[i]);
  }
}
// special character variable
if(special){
  for(var i=0; i < special.length; i++){
    userPick.push(special[i]);
  }
}
// numbers character variable 
if(numbers){
  for(var i=0; i < numbers.length; i++){
    userPick.push(numbers[i]);
  }
}
// final result stores all password critera 
var finalResult = [];
for(i=0; i < passwordAmount; i++){
  finalResult.push(userPick[Math.floor(Math.random()* userPick.length)]);
}
// return finalResult
return(finalResult.join(""));
}

//starter code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//starter code
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

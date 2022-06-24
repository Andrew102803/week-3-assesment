var generateBtn = document.querySelector("#generate");

var longword;
var bigletter;
var smolletter;
var numberbeep;
var funnies;
var userdumb;

generateBtn.addEventListener("click", writePassword);


var lowerCase = ["a", "b", "c", "d", "e", "f",  "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Var To Upper Case ------------
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
//--------------------------------------
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", , "=", , " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// pls tell me if in teh future there is a easier way to input all this i hhated it 





function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Start Function
function generatePassword() {
  // Ask four user Input
  longword = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("Password length " + longword);

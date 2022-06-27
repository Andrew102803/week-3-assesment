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
if(!longword) {
    alert("Required value");

  } else if (longword < 8 || longword > 100) {
    longword = prompt("You must choose between 8 and 100");
    console.log("Password length " + longword);
  
  } else { 

    smolletter = confirm("big letters?");
    console.log("Upper case " + smolletter);
    bigletter = confirm("Lower case?");
    console.log("Lower case " + bigletter);
    funnies = confirm("special characters?");
    console.log("Special Character " + funnies);
    numberbeep = confirm("numbers?");
    console.log("Number " + numberbeep);
   
  };

  //this next section made me cry
  if (!bigletter && !smolletter && !numberbeep && !funnies) {
    userdumb = alert("You must choose a criteria");
 
  } else if (bigletter && smolletter && numberbeep && funnies) {
    userdumb = lowerCase.concat(upperCase, numbers, special);
    console.log(userdumb);
  }
 
  else if (bigletter && smolletter && funnies) {
    userdumb = lowerCase.concat(upperCase, special);
    console.log(userdumb);
  }
  else if (bigletter && smolletter && numberbeep) {
    userdumb = lowerCase.concat(upperCase, numbers);
    console.log(userdumb);
  }
  else if (smolletter && numberbeep && funnies) {
    userdumb = upperCase.concat(numbers, special);
    console.log(userdumb);
  }
  else if (bigletter && numberbeep && funnies) {
    userdumb = lowerCase.concat(numbers, special);
    console.log(userdumb);
  }
  
  else if (bigletter && smolletter) {
    userdumb = lowerCase.concat(upperCase);
    console.log(userdumb);
  }
  else if (bigletter && numberbeep) {
    userdumb = lowerCase.concat(numbers);
    console.log(userdumb);
  }
  else if (bigletter && funnies) {
    userdumb = lowerCase.concat(special);
    console.log(userdumb);
  }
  else if (smolletter && numberbeep) {
    userdumb = upperCase.concat(numbers);
    console.log(userdumb);
  }
  else if (smolletter && funnies) {
    userdumb = upperCase.concat(special);
    console.log(userdumb);
  }
  else if (numberbeep && funnies) {
    userdumb = numbers.concat(special);
    console.log(userdumb);
  }
 //i am in physical pain from this aghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
  else if (smolletter) {
    userdumb = blankUpper.concat(upperCase);
    console.log(userdumb);
  }
  else if (bigletter) {
    userdumb = lowerCase;
    console.log(userdumb);
  }
  else if (funnies) {
    userdumb = special;
    console.log(userdumb);
  }
  else if (numberbeep) {
    userdumb = numbers;
    console.log(userdumb);
  };
// last bit of code thank god
  var passwordBlank = [];
  
  // random stuff
  for (var i = 0; i < longword; i++) {
    var allChoices = userdumb[Math.floor(Math.random() * userdumb.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }


  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  //puts the password in box
}
//According to all known laws of aviation a bee should not be able to fly

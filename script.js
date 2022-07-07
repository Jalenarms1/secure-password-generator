// Assignment Code
var generateBtn = document.querySelector("#generate");


// These variables store the value of each range of parameter that is put through the function
const lower = codesToArray(97, 122);
const upper = codesToArray(65, 90);
const numbers = codesToArray(48, 57);
const symbolCodes = codesToArray(33, 47).concat(
  codesToArray(58, 64)
).concat(
  codesToArray(91, 96)
).concat(
  codesToArray(123, 126)
)

// this function will take the parameters and loop through from the first number to the last within the given range and put them into an array
function codesToArray(low,high){
  var newArray = [];
  for (i = low; i <= high; i++){
    newArray.push(i)
  }
  return newArray 
}



// Write password to the #password input
function writePassword() {
  // variable to store the user's input 
  var passwordLength;
  
  // this function was created to ensure the number entered could only be within the 8-128 range by including the conditionals
  function neededInput(){
    passwordLength = prompt("How many characters would you like your password to be? 8-128")
    if(passwordLength < 8){
      alert("Error. Your password must be at least 8 characters long.")
      neededInput();
    } else if(passwordLength > 128){
      alert("Error. Your password can be no more than 128 characters long.")
      neededInput();
    } else if(passwordLength === " "){
      alert("Entry Invalid")
      neededInput();
    }
  }
  neededInput();
  // variables to store user info
  var numberChoice = confirm("Click OK to include numbers in your password")
  var upperCharacters = confirm("Click OK to include uppercase characters in your password")
  var symbolsCheck = confirm("Click OK to include special symbols in your password.")

  var password = generatePassword(passwordLength, numberChoice, upperCharacters, symbolsCheck);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


  function generatePassword(passwordLength, numberChoice, upperCharacters, symbolsCheck){
    // by default the characters are set to lowercase and each conditional will check the boolean of the user's input and concatenate the corresponding array
    let characters = lower
    if (numberChoice) characters = characters.concat(numbers)
    if(upperCharacters) characters = characters.concat(upper)
    if(symbolsCheck) characters = characters.concat(symbolCodes)

    // this ties it all in with the for loop that will take the above outcome and find random numbers that are in the characters array in the amount of the stored user input and will convert the random numbers to their corresponding character on the ASCII chart 
    // the outcome is stored in the final array and returned as a string into the text area
    var passHolder = []
    for (i = 0; i < passwordLength; i++){
      var passKey = characters[Math.floor(Math.random() * characters.length)] 
      passHolder.push(String.fromCharCode(passKey))
    }
    return passHolder.join('')


  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCatalog = "0123456789";
var specialSymbols = "@$^*&)%!.,`~";
var pLength;
var numbers;
var upperCase;
var symbolsCheck;

var passwordText = document.querySelector("#password");

  
  // this function is for the required input needed to generate a password, included with conditionals to make sure the entry is within the allowed parameters
function neededInput(){
pLength = prompt("Choose how many characters you would like in your secure password? 8-128")
if(pLength < 8 || pLength > 128 || isNaN(pLength)){
    alert("Entry invalid. Must choose a number between 8-128. Try again.")
    passwordText.innerText = " ";
    return
} else {  
    upperCase = confirm("By default your secure password will include lowercase letters. Click OK to include UPPERCASE.")
    numbers = confirm("Click OK to include numbers in your secure password.")
    symbolsCheck = confirm("Click OK to include special symbols in your secure password.")
}
    
}

function generatePassword(pLength, upperCase, numbers, symbolsCheck){
    let characterStorage = lower
    if(upperCase) characterStorage = characterStorage.concat(upper)
    
    if(numbers) characterStorage = characterStorage.concat(numberCatalog)

    if(symbolsCheck) characterStorage = characterStorage.concat(specialSymbols)
    
    // used to check that the valid values were being applied
    console.log(characterStorage);
    console.log(pLength);
    
    // this series of code ties in all of the stored values by looping through the comprised string how many ever times the user chose as the length value and is returned using an empty string that the new password is stored in
    var thePassword = "";
    for(i = 0; i < pLength; i++){
        var random = characterStorage[Math.floor(Math.random() * characterStorage.length)]
        thePassword = thePassword.concat(random)
    } return thePassword

}

// Write password to the #password input
function writePassword() {
  neededInput();
  
  var password = generatePassword(pLength, upperCase, numbers, symbolsCheck);
  
  passwordText.value = password;
  
  generatePassword();
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

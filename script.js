// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCatalog = "0123456789";
  var specialSymbols = "@$^*&)%!.,`~";
  var pLength;
  var numbers;
  var upperCase;
  var symbolsCheck;
  var passwordText = document.querySelector("#password");
  

  function neededInput(){
      pLength = prompt("Choose how many characters you would like in your secure password? 8-128")
      if(pLength < 8 || pLength > 128){
          alert("Entry invalid. Must choose a number between 8-128. Try again.")
          passwordText.innerText = " ";
          return
      } else {  
          upperCase = confirm("By default your secure password will include lowercase letters. Click OK to include UPPERCASE.")
          numbers = confirm("Click OK to include numbers in your secure password.")
          symbolsCheck = confirm("Click OK to include special symbols in your secure password.")
      }
      
  }
  neededInput();
  //needed to be after the above function in order to record a length value, most likely due to there being no value for the parameter prior to the prompt
  var password = generatePassword(pLength, upperCase, numbers, symbolsCheck);
  
  passwordText.value = password;

  function generatePassword(pLength, upperCase, numbers, symbolsCheck){
      let characterStorage = lower
      if(upperCase) characterStorage = characterStorage.concat(upper)
      
      if(numbers) characterStorage = characterStorage.concat(numberCatalog)

      if(symbolsCheck) characterStorage = characterStorage.concat(specialSymbols)
      

      console.log(characterStorage);
      console.log(pLength);
      
      var thePassword = "";
      for(i = 0; i < pLength; i++){
          var random = characterStorage[Math.floor(Math.random() * characterStorage.length)]
          thePassword = thePassword.concat(random)
      } return thePassword
 
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

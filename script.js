// Assignment Code
var generateBtn = document.querySelector("#generate");

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password



// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

function generatePassword() {
    var password = "";
    var passList = "";
    var lowerCharSet = "abcdefghijklmnopqrstuvwxyz";
    var upperCharSet = lowerCharSet.toUpperCase();
    var numberCharSet = "0123456789";
    var specialCharSet = "!#$%&'()*+,-./\":;<=>?@][^_`{|}~";

    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters
    var length = prompt("How many characters do you need in your password?"); 
        while (length < 8 || length > 128) {
            alert("Your password minimum has to be at least 8 characters and no more than 128 characters.");
            length = prompt("How many characters do you need in your password?");
        }
    // WHEN asked for character types to include in the password
    // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected


    var lowerCase = confirm("Do you need lowercase characters?");
        if (lowerCase) {
            passList += lowerCharSet;
        } 
    var upperCase = confirm("Do you need uppercase characters?");
        if (upperCase) {
            passList += upperCharSet;
        }
    var numbers = confirm("Do you need numeric characters?");
        if (numbers) {
            passList += numberCharSet;
        }
    var specialChar = confirm("Do you need special characters?");
        if (specialChar) {
            passList += specialCharSet;
        }
    
    for (var i = 0; i < length; i++) {
        var randomPassword = Math.floor(Math.random() * passList.length);
        password += passList.substring(randomPassword, randomPassword +1);
    }
    
    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

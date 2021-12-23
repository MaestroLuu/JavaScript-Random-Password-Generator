var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var password = "";
    var passList = "";
    var lowerCharSet = "abcdefghijklmnopqrstuvwxyz";
    var upperCharSet = lowerCharSet.toUpperCase();
    var numberCharSet = "0123456789";
    var specialCharSet = "!#$%&'()*+,-./\":;<=>?@][^_`{|}~";

    var length = prompt("How many characters do you need in your password?"); 
    while (length < 8 || length > 128) {
        alert("Your password minimum has to be at least 8 characters and no more than 128 characters.");
        length = prompt("How many characters do you need in your password?");
    }

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
    
    if (!lowerCase && !upperCase && !numbers && !specialChar) {
        alert("Please try again and select at least one character type.");
    } else {
        for (var i = 0; i < length; i++) {
            var randomPassword = Math.floor(Math.random() * passList.length);
            password += passList.substring(randomPassword, randomPassword +1);
        }
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

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// when button is clicked, create prompt that asks for length of the password that must be between 8 and 128 charachers
var number; 
document.getElementById("generate").addEventListener("click", lengthFunction);

function lengthFunction() {
  var length = prompt("What is the desired length of password between 8 and 128 characters:", "8"); 
  if (length == null || length ==""){
  number = "User cancelled the prompt.";
  } else {
   number = "random characters based on # entered"; 
   
  }
  document.getElementById("password").innerHTML = number;
}



//Use Math.random() to generate the random index 
//Use Math.floor() to round and add into the var created 
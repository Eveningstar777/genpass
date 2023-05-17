// Assignment Code
var generateBtn = document.querySelector("#generate");

const numArray =[1,2,3,4,5,6,7,8,9];
const lowercaseArray =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const uppercaseArray =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const specialCharArray =['!','@','#','$','%','^','&','*','(',')','/','>','<'];
// const allArray = numArray.concat(lowercaseArray,UppercaseArray,specialCharArray);
 
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
 let charTypes = "";
 const length = prompt ("thanks for clicking, how long do you want this password?"); 
 if (Number.isNaN(length) || length <8 || length > 128 ) {
  alert("input must be a number value, and must be between 8 and 128 characters");
  return null
 }
 const addUpperCase = confirm ("add uppercase characters")
 const addLowerCase = confirm ("add lower case")
 const addNum = confirm ("add numerical characters")
 const addSpecChar = confirm ("add special characters")

 if (!addLowerCase&&!addNum&&!addSpecChar&&!addUpperCase) {
  alert ("must select one option");
  return null
 }
 var choices = {
  length:length,
  addUpperCase:addUpperCase,
  addLowerCase:addLowerCase,
  addSpecChar:addSpecChar,
  addNum:addNum,
 }
  console.log(choices);
let finalPassword =[]
let potentialPassword = []
let confirmedPassword =[]
if (choices.addUpperCase) {
  potentialPassword = potentialPassword.concat(uppercaseArray)
  confirmedPassword.push(getRandom(uppercaseArray))
}
if (choices.addLowerCase){
  potentialPassword = potentialPassword.concat(lowercaseArray)
  confirmedPassword.push(getRandom(lowercaseArray))
}
if (choices.addSpecChar){
  potentialPassword = potentialPassword.concat(specialCharArray)
  confirmedPassword.push(getRandom(specialCharArray))
}
if (choices.addNum){
  potentialPassword =potentialPassword.concat(numArray)
  confirmedPassword.push(getRandom(numArray))
}
console.log(potentialPassword,confirmedPassword);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
console.log (password);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
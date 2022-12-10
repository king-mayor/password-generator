const passGen = document.querySelector(".passGen");
const lent = document.querySelector(".lent");
const upperEl = document.querySelector(".upperEl");
const lowerEl = document.querySelector(".lowerEl");
const numberEl = document.querySelector(".numberEl");
const symbEl = document.querySelector(".symbEl");
const generateEl = document.querySelector(".generateEl");

// create variables for the random selection

const randomNumbers = "0123456789";
const randomUpperCase = "ABCDEFGHIJKLMNOPQRSTVUWXYZ";
const randomLowerCase = "abcdefghijklmnopqrstvuwxyz";
const randomSymbols = "!@#$%^&*(){}[]+_-/";

// write functions for random selections 

function setNumber (){
 return randomNumbers[Math.floor(Math.random () * randomNumbers.length)];
}
function setUpperCase (){
    return randomUpperCase[Math.floor(Math.random () * randomUpperCase.length)];
}
function setLowerCase (){
    return randomLowerCase[Math.floor(Math.random () * randomLowerCase.length)];
}
function setSymbols (){
    return randomSymbols[Math.floor(Math.random () * randomSymbols.length)];
}
// main FUnction that houses everything

function generatePassword () {
    let initialValue = lent.value;
    let password = "";

    for(let i=0;i<initialValue;i++){
        let x = pushPassword();
        password += x;
    }
    passGen.innerText = password;
}
// created a function for the arrays that stored the values 
function pushPassword (){
    const showMe = [];
    if(upperEl.checked){
        showMe.push(setUpperCase());
    }
    if(lowerEl.checked){
        showMe.push(setLowerCase());
    }
    if(symbEl.checked){
        showMe.push(setSymbols());
    }
    if(numberEl.checked){
        showMe.push(setNumber());
    }
    return showMe[Math.floor(Math.random() * showMe.length)];
}
// added a click event that fires off the functions
generateEl.addEventListener("click", generatePassword);
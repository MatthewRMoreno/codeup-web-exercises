"use strict"
//prompt user to enter a number
let question = prompt("Hello user would you please enter a odd number between 1 and 50.")
while(true) {
    if (question % 2 !== 0 && question >= 1 && question <= 50) {
        console.log("Odd number entered please continue.");
        break;
    }
    question = prompt("Sorry, that is not an odd number. Please enter an odd number between 1 and 50.")
}
//switches the answer to the prompt a number data type
let value = parseInt(question)
//Rounds he nuber up or down if it is a decimal value
let fixNum = value.toFixed()
let number = "Number to skip is: " + fixNum
console.log(number);
    for (let i = 1; i < 50; i++) {
        if ((i % 2) === 0) {
            continue;
        }
        if (i === parseInt(fixNum)) {
            console.log('Yikes! Skipping number: ' + fixNum);
        } else {
            console.log('Here is an odd number: ' + i);
        }
    }
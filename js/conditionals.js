"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
/**
function analyzeColor(input) {
    if (input === "blue") {
        return("Blue is the color of the sky");
    } else if (input === "red") {
        return("Red is the color of apples")
    } else if (input === "green") {
        return("Green is the color of grass")
    } else if (input === "yellow") {
        return("Yellow is the color of bananas")
    } else {
        return("I dont have anything about " + input + " in my database :(")
    }
}
 */
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//let random = analyzeColor(randomColor)
//console.log(random)
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
let color = prompt("What is your favorite color?");
function analyzeColor(color) {
    switch (color) {
        case "blue":
            alert("Blue is the color of the sky");
            break;
        case "red":
            alert("Red is the color of apples");
            break;
        case "green":
            alert("Green is the color of grass");
            break;
        case "yellow":
            alert("Yellow is the color of bananas");
            break;
        default:
            alert("I do not have the color " + color + " in my database")
            break;
    }
}
analyzeColor(color);
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
let total = prompt("What is your total price?")
// let number = prompt("What number did you pull?")
function calculateTotal(number, total) {
    switch(number){
        case 0 :
            alert("Sorry you pulled a 0 :(, no discount for you, your price is $" + total + "!");
            break;
        case 1 :
            alert("Congratulations you pulled a 1, you get a discount of 10% off your total purchase! Your new total is $" + (total * .90) + "!");
            break;
        case 2 :
            alert("You are one lucky customer you pulled a 2, you get a discount of 25% on your total at checkout. Your new price is $" + (total * .75) + "!");
            break;
        case 3 :
            alert("Congatulations you pulled a 3, you will get a discount of 35% at checkout. Your new total is $" + (total * .65) + "!");
            break;
        case 4 :
            alert("Congrats you pulled a 4 and won 50% off of your purchase. Your new total is $" + (total * .5) + "!");
            break;
        case 5 :
            alert("WINNER, WINNER, CHICKEN DINNER! You pulled a 5 and won 100% off of your purchase, your price at checkout will be $" + 0 + "!!!!");
            break;
    }
}
//calculateTotal(number, total)
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
calculateTotal(luckyNumber, total)
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
/**let question = confirm("Would you like to enter a number?")
    if (question = true)
        let answer = prompt("What is the number you would like to enter.")
1) alert ("It is " + (answer % 2 === 0) + "that your number is even.")
2) alert ("Your number plus 100 is " + (answer + 100) + ".")
3)  alert ("Your number is " + (Math.sign(answer)) + ".")
*/
function numberPick() {
    let question = confirm("Would you like to enter a number?");
        if(question === true) {
            let answer = prompt("What number would you like to enter");
            test(answer);
            console.log(answer);
            function test(x) {
                console.log(answer);
                isOdd(answer);
                function isOdd(x) {
                    if (answer % 2 === 0) {
                        alert("The number " + answer + " is Even.");
                    } else {
                        alert("The number " + answer + " is Odd.");
                    }
                }
                addHundred(answer);
                function addHundred(x) {
                    alert("Your number plus 100 is " + (answer + 100));
                }
                positveOrNegative(answer);
                function positveOrNegative(x) {
                    if (answer > 0) {
                        alert("The number you chose is positive.");
                    } else if (answer < 0) {
                        alert("The number you chose is negative");
                    } else {
                        alert("The number you chose is zero.");
                    }
                }
            }
        } else{
            alert("Please refresh the page and enter a number?")
        }
}
numberPick()

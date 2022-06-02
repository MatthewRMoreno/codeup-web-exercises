"use strict";
alert("Welcome to my Website!");
let userColor = prompt("Hello, what is your favorite color?");
console.log("Favorite color is " + userColor)
alert("No way, " + userColor + " is my favorite color as well!");
//When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.
// Finally, commit the changes to your git repository, and push to GitHub.
let movieToRent = prompt("What is the name of the movie you rented");
console.log("The movie that was rented is " + movieToRent)
let daysRented = prompt("How many days did you rent " + movieToRent + "?");
console.log("The number of days rented is " + daysRented)
let priceForRental = daysRented * 3;
console.log("The total price of rental is " + priceForRental)
alert("The total price for renting " + movieToRent + " for " + daysRented + " days is $" + priceForRental + ".");

let googleHours = prompt("How many hours did you work for Google this week?")
console.log("Number of hours worked for Google is " + googleHours)
let amazonHours = prompt("How many hours did you work for Amazon this week?")
console.log("Number of hours worked for Amazon is " + amazonHours)
let facebookHours = prompt("How many hours did you work for Facebook this week?")
console.log("Number of hours worked for Facebook is " + facebookHours)
let totalPay = (googleHours * 400) + (amazonHours * 380) + (facebookHours * 350)
console.log("The total amount you will be getting paid is " + totalPay)
alert("Your total income this week from Google, Amazon, and Facebook is $" + totalPay + "!")

let classFull = confirm("Is the class you want to enroll in full?")
console.log(classFull)
let classSchedule = confirm("Does the class schedule interfere with your own schedule? ")
console.log(classSchedule)
let classEnroll = alert("It is " + (!classFull && !classSchedule) + " that you can attend this class!")
console.log(classEnroll)

let moreThanTwo = confirm("Do you have more than two items in your cart")
let offerValid = confirm("Is the offer for the product still valid?")
let premiumMember = confirm("Are you a premium member?")
alert("Welcome, from your responses it is " + (moreThanTwo && offerValid || premiumMember) + " that you are eligible for the product offer.")

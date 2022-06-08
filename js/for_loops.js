"use strict";
function showMultiplicationTable(number) {
    for(let i = 1; i <= 10; i++){
        console.log((number) + " x " + (i) + " = " + (number * i));
    }
}

function randomOddOrEven(x) {
    for (let i = 0; i < 10; i++) {
        let random = Math.floor((Math.random() * 180) + 20);
        if (random % 2 === 0) {
            console.log("The number " + random + " here is even.");
        }else{
            console.log("The number " + random + " here is odd.");
        }
    }
}

function plusSame(x) {
    for (let i = 1; i <= 9; i++) {
        let iAsString = i.toString();
        console.log(iAsString.repeat(i));
    }
}

function minusFive(x) {
    for (let i = 100; i > 0; i -= 5) {
        console.log(i);
    }
}
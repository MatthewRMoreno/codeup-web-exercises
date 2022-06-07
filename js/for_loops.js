"use strict";
function showMultiplicationTable(number) {
    for(let i = 1; i <= 10; i++){
        console.log((number) + " x " + (i) + " = " + (number * i))
    }
}

function randomOddOrEven(x) {
    for (let i = 0; i >= 20, i <= 200; i++) {
        let random = Math.floor((Math.random() * 180) + 20)
        if (random % 2 === 0) {
            console.log("The number " + random + " here is even.");
        }else{
            console.log("The number " + random + " here is odd.");
        }
    }
}

function plusSame(x) {
    for (let i = 1; i < 10; i++) {
        var count = []
        for (let b = 1; b<= i; b++) {
            count.push(i);
        }
        console.log(count.join(""));
    }
}

function minusFive(x) {
    for (let i = 100; i > 0; i--) {
        console.log(i);
        i = i - 4;
    }
}
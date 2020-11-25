// 1 - Using the built-in map array function and an anonymous function, 
//     square all items in a number array
function squareElements(ar) {
    return ar.map(function(i) {
        return i * i;
    })
}

const inputArray = [1, 2, 3, 4, 5];
const squaredArray = squareElements(inputArray);
console.log(squaredArray);

// 2 - Write an IIFE function using an anonymous function which sums two numbers 
//     and logs the sum out to the console

let result = (function() {
    return 3 + 5;
})();

console.log(result);

// 3 - Make function timesTwo an arrow function:

let timesTwo = number => number * number;

console.log(timesTwo(5));
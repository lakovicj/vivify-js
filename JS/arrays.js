const colours = ['red', 'yellow', 'blue', 'green', 'black'];

function loopArray(colours) {
    // for loop
    console.log("For loop");
    for (let i = 0; i < colours.length; i++) {
        console.log(colours[i]);
    }

    // foreach loop
    console.log("For each loop");
    colours.forEach(colour => {
        console.log(colour);
    });
}

// 1 - Write a function that will rotate an array to the right by a certain number of "steps"

function rotateArray(arr, step=1) {
    let rotated = [];
    for(let i = step; i < colours.length + step; i++) {
        rotated.push(arr[i % arr.length]);
    }
    console.log(arr);
    console.log(rotated);
    return rotated;
}

// 2 - Write a function that uses the native Array .reduce method to sum up an array of numbers, 
//     but starting at 50. 

function reduceFunc(arr) {
    return arr.reduce((total, curr) => total + curr, 50);
}

// 3 - Create a function that takes a number as an argument and returns an array. The first 
//     element of the array should be 0, and then each element should increase by 1 until it 
//     reaches the input number. Then, each element should count back down to 0. 

function makeArray(n) {
    let retArray = [];
    for (let i = 0; i < n; i++) {
        retArray.push(i);
    }

    for (let i = n; i >= 0; i--) {
        retArray.push(i);
    }

    return retArray;
}

// 4 - Write a function zooInventory that takes a zoo's inventory of animals (represented 
//     using nested arrays) and returns an array of strings that describe each animal's name, 
//     species, and age.

function zooInventory(animals) {
    let outputStrings = [];
    animals.forEach(animal => {
        let output = `${animal[0]} the ${animal[1][0]} is ${animal[1][1]}`;
        outputStrings.push(output);
    })

    return outputStrings;
}

// Task 0
//loopArray(colours);

// Task 1
//rotateArray(colours, step=2);

// Task 2
//numbers = [1, 2, 3, 4, 5];
//console.log(reduceFunc(numbers));

// Task 3
//console.log(makeArray(10));

// Task 4
var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
];

console.log(zooInventory(myZoo));
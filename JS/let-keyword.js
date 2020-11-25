function loopFunctionVar() {
    for (var i = 0; i < 10; i++) {

    }
    console.log("Loop function with var")
    console.log("i=" + i);
}

function loopFunctionLet() {
    for (let i = 0; i < 10; i++) {

    }
    console.log("Loop function with let")
    console.log("i=" + i);
}

function letInsideFor() {
    for (let i = 0; i < 10; i++) {
        let x = 0;
    }

    console.log("Let inside for");
    console.log("let x=" + x);
}

var globalX = 10;

function printGlobal() {
    console.log("GlobalX = " + globalX);
}



function test() {

    let letReturn = [];

    for (let i = 0; i < 10; i++) {
        letReturn.push(function() {
            console.log(i);
        })
    }
    
    let varReturn = [];
    for (var j = 0; j < 10; j++) {
        varReturn.push(function() {
            console.log(j);
        })
        
    }

    return [letReturn, varReturn];
}

// 1 - loop with var
// prints i=10 (or last element)
loopFunctionVar();

// 2 - loop with let
// i is not defined beacuse it has block scope
//loop_function_let();

// 3 - let inside for
// x is not defined
//let_inside_for();

// 4 - global variable inside function
//printGlobal();


const returnFuncs = test();
const letFunctions = returnFuncs[0];
const varFunctions = returnFuncs[1];
console.log("----let----");
letFunctions[0]();
letFunctions[1]();

console.log("-----var-----")
varFunctions[0]();
varFunctions[1]();

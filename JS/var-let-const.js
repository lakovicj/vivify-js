// 1 - var VS let VS const

//  ============================ var =====================================
// - globally scoped if declared outside a function block (belongs to the global browser's Window object)
var globalVariable = "hello world";

// - function scoped when declared inside of a function block
function test() {
    var localVariable = "hello local";
    console.log(localVariable);
}

//console.log(localVariable)  // error

// - variables declared with var can be re-declared and updated
//   and this can be problem -> if you forgot that you already declared variable and you don't want
//   to redefine it
var globalVariable = "hello world";
globalVariable = "updated hello world";

// - they are HOISTED!!! 
//   (meaning declarations are moved to the top of their scope and initialized to UNDEFINED)
console.log(hoistedVar);    // undefined, but no error
var hoistedVar = "hoisted variable";

// =========================== let ====================================

// - it is block scoped
if (true) {
    let hello = "hi!";
}
//console.log(hello); // error

// - thet can be updated but cannot be re-declared
let x = 5;
x = 6;
// let x = 5; // error

// - they are HOISTED, but they are not initialized to UNDEFINED like var
// - initialization is not hoisted!
// y = 5;
// console.log(y);   // reference error
// let y;

// =============================== const ==================================

// - ther are block scoped like let
// - but they cannot be re-decalred nor updated

const greeting = "hello";
// greeting = "welcome";       // error
// const greeting = "hello"    // error

// - although properties of const object can be updated
//   (object cannot be updated but their properties can)

const obj = {
    firstName: "Pera"
}

obj.firstName = "Mika";         // works
console.log(obj.firstName);     // prints Mika

//obj = {                         // fails
//    lastName: "Peric"
//}

// - they are also hoisted like let (not initialized)



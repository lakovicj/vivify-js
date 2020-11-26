// REGULAR FUNCTIONS

// when calling regular functions, there are two default params: this and arguments
// this has different value based on the way functions is being called:

// calling function as method: this has the value of the object that calls the method
// calling function as regular function: this has the value of global Window object
// calling function as constructor: this has a value of newly crated object
// calling functions with apply: this is being passed as param

// ARROW FUNCTIONS =>

// this is not bound to the global Window object!!
// instead, this value of the enclosing lexial scope is used


// REGULAR function
function sumNumbers(a, b) {
    return a + b;
}

// ARROW function
let sumNumbersArrow = (a, b) => a + b;

// this - difference between es5 and es6
// REGULAR FUNCTIONS
window.age = 10;
function Person() {
    this.age = 50;
    setTimeout(function() {
        console.log("age:", this.age);      // age=10 instead of age=50
    }, 100);
}
// this happens because this.age inside of Person function and this.age inside of anonymous setTimeout
// functions are not the same

var p = new Person();

// ARROW FUNCTIONS
window.age = 10;
function Person2() {
    this.age = 50;
    setTimeout(() => {
        console.log("age:", this.age);           // age=50
    }, 100);
}

var p2 = new Person2();

// this works fine because this inside of setTimeout anonymous function is lexically bound to the
// Person function

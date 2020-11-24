// JS object
let person = {
    firstName: "Pera",
    lastName: "Peric",
    age: 25
}

// JSON format
let personJSON = '{"firstName":"Pera", "lastName":"Peric", "age":25}';

let parsedFromJson = JSON.parse(personJSON);
let stringifiedPerson = JSON.stringify(person);

// JS array
let arr = [1, 2, 3, 4, 5];
// JSON format array
let arrJSON = '[1, 2, 3, 4, 5]';

let parsedArr = JSON.parse(arrJSON);
parsedArr.forEach(i => {
    console.log(i);
});



/*
import compose from 'lodash/fp/compose'
// 1)
// Functions are first-class citizens
console.log("---- First Class Citizens")
const sayHello = function () {
    return "Hello, World";
}

// assigning funtion to variable
const fn = sayHello;

// passing function as an arguement
const greet = function (fnMessage) {
    console.log(fnMessage());
}

greet(fn);

// you can also return a function from another function
const sayHii = function () {
    return function () {
        return "Hii There"
    }
}

// 2)
// Higher Order Functions (function that takes fn as arguement or returns a function or does both)
console.log("\n---- Higher Order Functions");
console.log("sayHii and greet are examples of Higher order functions");
const numbers = [1, 2, 3];
numbers.map(number => console.log(number * 2));
setTimeout(() => console.log("After 1 sec"), 1000);

// 3)
// Function Composition
console.log("\n ---- Function Composition");

const input = "    JavaScript    ";
const output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

const outputStr = wrapInDiv(toLowerCase(trim(input)));
console.log(outputStr);

// Composing and Piping
const composedFn = compose(wrap("div"), toLowerCase, trim);        // read from left-to-right
console.log(composedFn(input))

// Currying wrap
const pipedFn = pipe(trim, toLowerCase, wrap("span"));
console.log(pipedFn(input));

// Pure functions
// the functions that returns same result every time the args are same
// Doesnt depend on outside variables

// Immutability
// Once created, cannot change
// Strings, Numbers, Booleans
// Redux objects(stores) are immutable

// Updating Objects
const person = {
    name: "Tejas",
    address: {
        city: "New York",
        country: "USA",
    }
};

const updated = {
    ...person,
    age: 30,
    address: {
        ...person.address,
        city: "New York"
    }
}
// updated.address.city = "New York";

console.log(person);
console.log(updated);
*/

// Updating Arrays
const numbers = [1, 2, 3];

// Adding
const index = numbers.indexOf(2);
const added = [
    ...numbers.slice(0, index),
    4,
    ...numbers.slice(index),
];

console.log(added);

// Removing
const removed = numbers.filter(number => number != 2);
console.log(removed);

// Updating
const updated = numbers.map(number => number === 2 ? 20 : number);
console.log(updated);
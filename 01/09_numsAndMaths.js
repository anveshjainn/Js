const score = 400
console.log(score);// In js it is automatically detected that the variable is of which type by seeing the value.

// But it can also be done manually

const score2 = new Number(500) // Here also like string we can have properties that can help to perform some actions.
console.log(score2); // Here the output will also show the type of datatype

console.log(score2.toString()); // number to string
console.log(score2.toFixed(2)); // fix a decimal number upto a given numbers of decimal

const otherScore = 123.5678
console.log(otherScore.toPrecision(5)); // approx a number to a precise value 

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // puts commas into a big number
console.log(hundreds.toLocaleString('en-IN')); // puts commas into a big number in indian style

// --------------MATHS-------------

// Maths is a library that comes by default in js
// Math is a object in js that has many properties inside it

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.7));
console.log(Math.max(4, 3, 5, 7));
console.log(Math.min(4, 5, 6, 8));

console.log(Math.random()); // a random value between 0 and 1
console.log(Math.random()*10); // multiplied by 10 so the value will be from 0 to 10
console.log((Math.random()*10)+1); // now values will be from 1 to 10


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // when min and max range is given









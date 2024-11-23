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





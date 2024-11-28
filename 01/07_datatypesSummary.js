// In programming, data types is an important concept.
// To be able to operate on variables, it is important to know something about the type.

// Datatypes are categorized on the basis of how data can be stored and accessed

//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const score1 = 100.3

const scoreValue = "100"

const isLoggedIn = false

const outsideTemp = null

let userEmail; // undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n


// JavaScript has dynamic types. This means that the same variable can be used to hold different data types
// In js there is no need to define ttpe of your variable.
// Therefore javascript is a dynamically typed language.



// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); // to know which type of dT is 

// https://262.ecma-international.org/5.1/#sec-11.4.3
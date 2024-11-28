const name = "Anvesh"
const age = 22

console.log(name + age); // basic way for string concatenation

console.log(`${name}${age}`); // Concatenating strings using backticks and string interpolation

// String interpolation is a programming technique that replaces placeholders in a string literal with their corresponding values.



// String can also be declared using objects - 
const gameName = new String('anveshaj') //here calling gameName will give you String ('anveshaj)

console.log(gameName);

// The benefit here is that by doing this we get many methods in prototypes.

// And we know here is key value pairs so we can use that also-
console.log(gameName[3]); // to find the character on index 3
console.log(gameName.__proto__);

console.log(gameName. length); // method for finding length
console.log(gameName. toUpperCase()); // to convert into uppercase
console.log(gameName. charAt('5'));
console.log(gameName. indexOf('v')); // to find on which index is a character
console.log(gameName. substring(0, 4)); // to divide into substring. The divided substring will not include the later number. for eg. in this case it will include 0 but not 4.

const anotherString = gameName.slice(-6, 4) // same as substring but can use negative values
console.log(anotherString);

const newString = "    Anvesh    "
console.log(newString);
console.log(newString.trim()); // removes extra and useless space

const url = "https://anvesh.com/anvesh jain" // the browser does not understand space and will automatically convert space into %20
console.log(url.replace(' ', '-')); // replace is used to replace any character. Here space is replaced by -

console.log(url.includes('anvesh')); // to check whether a character is there or not

const stringNew = "anvesh-jain-name" // split can be used to split this string into an array of different parts based on anything you want
console.log(stringNew.split('-')); // here string stringNew is converted into an array based on -













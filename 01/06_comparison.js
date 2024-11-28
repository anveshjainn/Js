//comparisons can be done between  values of same datatypes

console.table ([2>1, 2<1, 2>=1, 2==1, 2!=1])

//or different datatypes

console.table(["2">1, "02">1]) // here js automatically converted the string into a number before comparing


console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// the reason is the == and >= works differently. 
//Comparison converts null to a number, treating it as 0. Thats why in 3rd null>=0 is true and null>0 is false

// ===
console.log("2" === 2) // strict check. It checks value as well as datatype
//JavaScript Date objects represent a single moment in time in a platform-independent format.
// Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970
// TC39 is an org that defines any new features in js
// Currently TC39 is working on Temporal API. And to make temporal API a global object like MATH.

let myDate = new Date() 
console.log(myDate);

// We can convert date into string to read better
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate); // date is an object.


let myCreatedDate = new Date(2024, 0, 23) // to Declare a specific date
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
//In js date months starts from 0. i.e jan = 0, feb = 1.










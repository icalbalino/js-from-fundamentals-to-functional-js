// Assignments with Dots
var person = {}
person.name = "Mrs. White"

// var person = {
//     name: "Mrs. White",
// }

console.log(person) 
console.log(person.name) // ?

// Access with Dots
var who = person.name;
console.log(who); // ?

person.name = "Mr. White"
console.log(who); //?

console.log(who.story); //??

// Arrays
var person = []
person.name = "Mrs. White"
console.log(person)
var who = person.name
console.log(who);
console.log(typeof person === "array");

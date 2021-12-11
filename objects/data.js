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

// Bracket notation
person[0] = "I was not in the Billiards room";
console.log(person)

// Arrays
// var person = [];
// person.name = "Mrs. White";
// person[plea] = "I would never!" // ?

// Arrays
var person = [];
var plea = "wouldShe"
person.name = "Mrs. White";
person[plea] = "I would never!"
console.log(person)
person.plea //?? 
console.log(person.plea) //error invalid 

person["plea"] = "I would never!"
person.plea //??
console.log(person.plea)

// Non-valid Characters
var box = {};
box['material'] = "cardboard";
box[0] = 'meow';
box['^&*'] = "testing 123";
var test = box['^&*'];
console.log(box);
console.log(test);


// exercise
/* Create an object using bracket and dot notation 
that represents the characters and related data 
you may find in a game of Clue. 
*/

const game = {}
game.pembunuh = "??"

game['senjata'] = [
    { type: "keyboard", lokasi: "kamar" },
    { type: "pen", lokasi: "perpus" }, 
    { type: "phone", lokasi: "dapur" }
]
console.log(game.senjata[2].lokasi)

game.name = []
game.name.push("balino")
game.name[1] = 'lolo'
console.log(game.name);

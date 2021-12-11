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


// ES6 Destructuring
const [pertama, kedua] = ['hallo world', 'yoo'];
console.log(pertama);

const { first, second } = { first: 'you', second: 'always you' }
console.log(second);

// Exercise
// 1. Create an object that looks like this: {"name": "Rusty", "room":"kitchen", "weapon":"candlestick"}
// 2. Extract out the weapon and location using destructuring

var { name, room, weapon } = { "name": "Rusty", "room": "kitchen", "weapon": "candlestick" }
console.log(room);

var obj = { "name": "Rusty", "room": "kitchen", "weapon": "candlestick" }
var weapon = obj.weapon
console.log(weapon);

// Destructuring === Arrays
var [a, b] = [1, 2]
console.log(a, b);
// => 1 2

// omit certain values
var [a, ,b] = [1, 2, 3]
console.log(a, b);
// => 1 3

// combine with spread/rest operator (accumulates the rest of the values)
var [a, ...b] = [1, 2, 3]
console.log(a, b);
// => 1 [ 2, 3 ]

// swap variables easily without temp
var a = 1, b = 2;
[a, b] = [b, a]
console.log(a, b);
// => 2 1

// advance deep arrays
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]]
console.log('a : ', a, ' b : ', b, ' c : ', c, ' d : ', d);
// => a :  1  b :  2  c :  [ [ 3, 4 ], 5 ]  d :  6

// === objects
var { user: x } = { user: 5 }
console.log(x);
// => 5

// fail-save
var { user: x } = { user2: 5 }
console.log(x);
// => undefined

// more values
var { user1: x, user2: y } = { user1: 10, user2: 5 }
console.log(x, y);
// => 10 5

// short-hand syntax
var { user1, user2 } = { user1: 10, user2: 5 }
console.log(user1, user2);
// => 10 5

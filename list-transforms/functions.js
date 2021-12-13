// Using Function

// List Transformations

// 1
// function CreateSuspectObjects(name) {
//   return {
//     name: name,
//     color: name.split(' ')[2],
//     speak: function () {
//       console.log("my name is ", name);
//     }
//   };
// };
// var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

// 2
// function CreateSuspectObjects(name) {
//   return {
//     name: name,
//     color: name.split(' ')[1],
//     //should be 1, not 2. Previous slide was a trick!
//     speak() {
//       console.log("my name is ", name);
//     }
//   };
// };
// var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

// 3
// function CreateSuspectObjects(name) {
//   return {
//     name: name,
//     color: name.split(' ')[1],
//     speak() {
//       console.log("my name is ", name);
//     }
//   };
// };
// var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White', ...];
// var suspectsList = [];

// 4
// function CreateSuspectObjects(name) {
//     return {
//         name: name,
//         color: name.split(' ')[1],
//         speak() {
//             console.log("my name is ", name);
//         }
//     };
// };
// var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
// var suspectsList = [];
// for(var i = 0; i < suspects.length; i++){
//     suspect = CreateSuspectObjects(suspects[i]);
//     suspectsList.push(suspect);
// }
// console.log(suspectsList);

// 5
// function CreateSuspectObjects(name) {
//     return {
//         name: name,
//         color: name.split(' ')[1],
//         speak() {
//             console.log("my name is " + name);
//         }
//     };
// };
// var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
// var suspectsList = [];
// for(var i = 0; i < suspects.length; i++){
//     suspectsList.push(CreateSuspectObjects(suspects[i]));
// }
// console.log(suspectsList);


// Looping With _.each
const { isArray } = require('underscore');
var _ = require('underscore');

// 1
function CreateSuspectObjects(name) { 
  return { 
    name: name,   
    color: name.split(' ')[1],   
    speak() {log("my name is ${name}");}
  }; 
}; 
var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White']; 
var suspectsList = [];
_.each(suspects, function(name) { // npm install underscore (underscoreJS)
    let suspectObj = CreateSuspectObjects(name);
    suspectsList.push(suspectObj); 
});

// 2
function CreateSuspectObjects(name) { 
  return { 
    name: name,   
    color: name.split(' ')[1],   
    speak() {log(`my name is ${name}`);}
  }; 
}; 
var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White']; 
var suspectsList = [];
_.each(suspects, function(name) {
    suspectsList.push(CreateSuspectObjects(name)); 
});


// _.each() usage

// _.each(list,iterator)
var rooms = ['observatory','ballroom', 'library'];
var logger = function(val){
    console.log(val);
};
_.each(rooms, logger);


// exercise
// Complete the rest of this function so that it works as described in the previous slides:
var _  = {}
_.each = function(list, callback) {
    if (Array.isArray(list)) {
        //loop through array
        for (let i = 0; i < list.length; i++) {
            //call the callback with a list item
            callback(list[i], i, list)
        }
    } else {
        //loop through object
        for (const key in list) {
            //call the callback with a list item
            callback(list[key], key, list)
        }
    }
}

_.each(['ical', 'ferin', 'balino'], function (name, i, list) {
    if (list[i + 1]) {
        console.log(name, ' is younger than ', list[i + 1])
    } else {
        console.log(name, ' is the older')
    }
})


// Exercise: Write w/ each.
// function CreateSuspectObjects(name) { 
//     return { 
//         name: name,   
//         color: name.split(' ')[1],   
//         speak() {log(`my name is ${name}`);}
//     }; 
// }; 
// var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White']; 
// var suspectsList = [];
// for(var i = 0; i < suspects.length; i++){ 
//     suspectsList.push(CreateSuspectObject(suspects[i])); 
// }

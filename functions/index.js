const _ = require('underscore')

// _.map(list, iterator)
const weapons = ['candlestick', 'lead pipe', 'revolver'];
const makeBroken = function(item){ return console.log(`broken ${item}`); };
const brokenWeapons = _.map(weapons, makeBroken);
brokenWeapons; 


// _.map() vs _.each()
// function CreateSuspectObjects(name) {
//   return {
//     name: name,
//     color: name.split(' ')[1],
//     speak() {console.log(`my name is ${this.name}`);}
//   };
// };
// var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
// var suspectsList = _.map(suspects, function (name) {
//   return CreateSuspectObjects(name);
// });
// console.log(suspectsList);

// _.each(suspectsList, function(suspect) {
//   suspect.speak()
// });


// Looping with `_.each()`
// function CreateSuspectObjects(name) {
//   return {
//     name: name,
//     color: name.split(' ')[1],
//     speak() {console.log(`my name is ${name}`);}
//   };
// };
// var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
// var suspectObjectList = [];
// _.each(suspects, function(suspect) {
//   return suspectObjectList.push(CreateSuspectObjects(suspect))
// });
// console.log(suspectObjectList);


// Looping with `_.map()`
function CreateSuspectObjects(name) { 
  return { 
    name: name,   
    color: name.split(' ')[1],   
    speak() {console.log(`my name is ${name}`);}
  }; 
}; 
var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White']; 
var suspectObjectList = _.map(suspects, function(suspect) {
    return CreateSuspectObjects(suspect)
});
console.log(suspectObjectList);


// Looping with `_.map()`
// _.map = function(list, callback) {
//     const storage = []
//     for (let i = 0; i < list.length; i++) {
//         storage.push(callback(list[i], i, list))
//     }
//     console.log(storage);
//     //return storage
// }
// _.map([1, 2, 3], function(val){ return val + 1; })
// => [ 2, 3, 4 ]


// Looping with `_.map()` using `_.each()`
_.map = function (list, callback) {
    const storage = []
    _.each(list, function (v, i, list) {
        storage.push(callback(v, i, list))
    })
    console.log(storage)
}
_.map([1, 2, 3], function (val) { return val + 1; })
// => [ 2, 3, 4 ]


// _.filter() Function
const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];


// Exercise 1: We are going to want to filter by those who were present, but first we need to write our filter function
// var _ = {}
// _.filter() with loop
// _.filter = function (arr, callback) {
//     //create a new array
//     const storage = [];
//     //loop through arr
//     for (let i = 0; i < arr.length; i++) {
//         // check if callback return true
//         if (callback(arr[i], i, arr) === true) {
//             // if returns true, push into array
//             storage.push(arr[i]);
//         }
//     }
//     console.log(storage);
//     // return array
//     return storage;
// };


// _.filter() with _.each()
_.filter = function (list, callback) {
    //create a new array
    const storage = [];
    //loop through list
    _.each(list, function (v, i, list) {
        // check if callback return true
        if (callback(v, i, list) === true) {
            // if returns true, push into array
            storage.push(v)
        }
    });
    // console.log(storage);
    // return array
    return storage;
};
_.filter(['ical', 'balino', 'ferin'], function (val, i, list) {
    if (val === 'ferin') {
        console.log(val, i, list);
    }
})
// => ferin 2 [ 'ical', 'balino', 'ferin' ]


// Exercise 2: Filter the video data by the people who were present on the night of the murder!
_.filter(videoData, function (suspectObject) {
    return suspectObject.present
})

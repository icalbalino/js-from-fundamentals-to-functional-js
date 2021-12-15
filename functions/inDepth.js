var _ = require('underscore');
// Functions In-Depth

// Exercise : Find Definitions, Fn Names, Fn Bodies, Invocations, Arguments, Parameters, Return Values, Side Effects
// var nameImprover = function (name, adj) {
//   return 'Col ' + name + ' Mc' + adj + ' pants';
// };
// $('body').hide();
// myArr.forEach(function(val){ console.log(val);});
// $('button').on('click', function(){ 
//   console.log('Don\'t press my buttons!');
// });

// Definitions
// function (name, adj) { return 'Col ' + name + ' Mc' + adj + ' pants'; };
// function(val) { console.log(val); }
// function() { console.log('Don\'t press my buttons!'); }

// Fn Names
// nameImprover
// hide
// forEach
// on
// log
// $

// Fn Bodies
// { return 'Col ' + name + ' Mc' + adj + ' pants'; };
// { console.log(val); }
// { console.log('Don\'t press my buttons!'); }

// Invocations
// .hide();
// .forEach(function (val) { console.log(val); });
// .log(val);
// .log('Don\'t press my buttons!');
// .on('click', function () { console.log('Don\'t press my buttons!'); });
// $('body')
// $('button')

// Arguments
// 'body'
// 'button'
// 'click', function () { console.log('Don\'t press my buttons!'); }
// function (val) { console.log(val); }

// Parameters
// name, adj
// val

// Return Values
// return 'Col ' + name + ' Mc' + adj + ' pants';

// Side Effects
// Side Effects is anything that reaches beyond the curly brackets of a function.
// console.log(val);
// .hide()


// ES6: Arrow Functions
// var nameImprover = (name, adj) => {
//   return `Col ${name} Mc ${adj} pants`;
// };
// $('body').hide();
// myArr.forEach(val => console.log(val));
// $('button').on('click', () => { 
//   console.log('Don\'t press my buttons!');
// });


// Exercise: project
// Filter and then map this data structure to get the names of the final suspects to send back to the team:
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

_.filter = function (list, callback) {
    //create a new array
    const storage = [];
    //loop through list
    _.each(list, function (v, i, list) {
        // check if callback return true
        if (callback(v, i, list)) {
            // if returns true, push into array
            storage.push(v)
        }
    });
    // console.log(storage);
    // return array
    return storage;
};
const suspects = _.filter(videoData, function (suspectObject) {
    return suspectObject.present
})
const suspectsNames = _.map(suspects, suspect => {
    return suspect.name
})


// Spread Operator
var createTuple = (a, b, c, d) => {
    console.log([[a, c],[ b, d]]);
    // return [[a, c],[ b, d]];
}
createTuple('It', 'be', 'could', 'anyone', 'no one'); 
// => ??
// => [ [ 'It', 'could' ], [ 'be', 'anyone' ] ]

var createTuple = (a, b, c, ...d) => {
    console.log([[a, c],[ b, d]]);
    // return [[a, c],[ b, d]];  
}
createTuple('It', 'be', 'could', 'anyone', 'no one'); 
// => ??
// => [ [ 'It', 'could' ], [ 'be', [ 'anyone', 'no one' ] ] ]


// Arguments Keyword
var createTuple = (a, b, c, d) => {
    console.log(arguments);
    // console.log([[a, c],[ b, d]]);
    return [[a, c],[ b, d]];
}
createTuple('It', 'be', 'could', 'anyone', 'no one');

var createTuple = function(a, b, c, ...d) {
    console.log(arguments); //  ['It', 'be', 'could', 'anyone', 'no one']
    console.log([[a, c],[ b, d]]); 
    // return [[a, c],[ b, d]];
}
createTuple('It', 'be', 'could', 'anyone', 'no one'); 
// => [Arguments] { '0': 'It', '1': 'be', '2': 'could', '3': 'anyone', '4': 'no one' }

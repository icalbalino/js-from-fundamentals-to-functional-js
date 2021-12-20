const { result } = require('underscore');
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


// Default Parameters
var add = function(a , b = 2) {
   console.log(arguments); //logs [3]
   return a + b; 
};
add(3); //5??


// Exercise: write this function in ES5
var add = function(a , b = 2){
   console.log(arguments); //logs [3]
   return a + b; 
};
add(3); //5??
// solution
function add(a, b) {
    b = b || 2;
    const hasil = a + b;
    console.log(hasil);
    return hasil
}
add(3)


// Array Like-Object
var constructArr = function() {
    const arr = Array.prototype.slice.call(arguments); // it will take an array like-obejct and turn it into an array.
    // ['was', 'it', 'in']
    arr.push('the billiards room?');
    // ['was', 'it', 'in', 'the billiards room?']
    console.log(arr.join(' '));
    return arr.join(' ');
};
constructArr('was', 'it', 'in');
// => was it in the billiards room?


// Array.from()
var constructArr = function() {
    const arr = Array.from(arguments);
    arr.push('the billiards room?');
    console.log(arr.join(' '));
    return arr.join(' ');
};
constructArr('was', 'it', 'in');
// => was it in the billiards room?


// _.from() Function
// Exercise: implement _.from()
const from = arr => {
    return Array.prototype.slice.call(arr)
}


// P.S. FUNCTIONS ARE OBJECTS!
var add = function (a, b) {
    console.log(a + b);
 	return a + b; 
};
add.example = 'testing 123!';


// Exercise: Currying
// Implement curry() that only takes up to 2 arguments
// _.curry(func) { }
const curry = (fn) => {
    return (arg) => {
        return (arg2) => {
            return fn(arg, arg2);
        }
    } 
}
var abc = function(a, b) {
    return [a, b];
};
var curried = curry(abc);
curried(1)(2);
// => [1, 2]


// Exercise Compose
// Implement your own compose function
const compose = (fn, fn2) => {
    return (arg) => {
        const result = fn2(arg);
        return fn(result);
    }
}
const consider = (name) => { return `I think it could be... ${name}`; };
const exclaim  = (statement) => { return `${statement.toUpperCase()}!`; };
const blame = compose(consider, exclaim);
blame('you');

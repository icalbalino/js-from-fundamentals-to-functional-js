// nesting
// const game = {};
// game['suspects'] = [];

// const game = {
//     'suspects': []
// }


// 1
// const game = {};
// game['suspects'] = [];

// game.suspects.push({
//   name:"Rusty", 
//   color: "orange"
// })

// const game = {
//     'suspects': [
//         {
//             name: "Rusty",
//             color: "orange"
//         }
//     ]
// }


// 2
// const game = {};
// game['suspects'] = [];

// game.suspects.push({
//   name:"Rusty", 
//   color: "orange"
// });

// game.suspects[1] = {
//   name: "Miss Scarlet", 
//   color: "red"
// };

// const game = {
//     'suspects': [
//         {
//             name: "Rusty",
//             color: "orange"
//         },
//         {
//             name: "Miss Scarlet",
//             color: "red"
//         }
//     ]
// }


// 3
const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        },
        {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}
console.log(game["suspects"]) //?? //=> objects in array


// exercise 1 (Nesting + Loops)
// Loop through the suspects array
for (let i = 0; i < game.suspects.length; i++) {
    console.log(game.suspects[i]);
}


// exercise 2 (Nesting + Loops)
// Loop through all the properties of the 
// suspect objects in the suspects array, 
// mark them if you think they are guilty.
var whos = function(game) {
    for (const key in game.suspects) {
        if (game.suspects[key].name === 'Miss Scarlet') {
            console.log('we found \'em !')
            // console.log(game.suspects[key].name);
        } else {
            console.log('next time!');
        }
        
    }
}
whos(game)

// or

var whos = function (game) {
    for (let i = 0; i < game.suspects.length; i++) {
        console.log('outer loop');
        for (const key in game.suspects[i]) {
            console.log('inner loop');
            if (game.suspects[i][key] === 'Miss Scarlet') {
                console.log('yoo');
                // break;
            } else {
                console.log('noo');
            }
        }
    }
}
whos(game)


// exercise 3 (Nesting + Destructuring)
// Destructure this nested data structure into two variables, one variable should 
// have the string 'red' and the next variable should have the string 'orange'.
var suspects = [
    {
        name: "Rusty",
        color: "orange"
    },
    {
        name: "Miss Scarlet",
        color: "red"
    }
]

var pertama = suspects[0].color;
var kedua = suspects[1].color;
console.log(kedua);

var [color1, color2] = [suspects[0].color, suspects[1].color];
console.log(color1);

var [{ color: color1 }, { color: color2 }] = suspects;
console.log(color1);

// var [test1, test2] = suspects;
// console.log(test1);


// Notes:  ACCESS & ASSIGNMENT
var suspects = [];
suspects[0] = 'scarlet';
suspects[1] = 'mustard';
suspects.push({ 'green': true });
console.log(suspects);

var i = 0;
suspects[i]; // ??
suspects[1];
suspects.pop() //??
console.log(suspects);

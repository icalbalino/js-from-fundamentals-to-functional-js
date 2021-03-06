# js-from-fundamentals-to-functional-js

**by** _ical balino_

_"Functional programming is about verbs, object oriented programming is about the nouns"_

Strengthen your understanding of tricky JavaScript concepts by : 
- Understanding how to use functional utility methods
- Understanding how to implement those methods
- Applying JS fundamentals throughout the process
- Adding some related ES6 features

## Objects

**Overview**
1. Property Access
2. Dot vs Bracket
3. Destructuring
4. Nesting + Loops  
5. Nesting + Destructuring

Anything that ever uses a dot in JavaScript is an object.

Primitive values get pass by value, while non-Primitive values get pass by reference.

### Property Access
- Assignments with Dots
- Access with Dots
- Arrays

### Dot vs Bracket
- Brackets (bracket notation)
- Non-valid Characters
- THE RULES
    - **Dots**
        1. strings ✔
        2. numbers ❌
        3. quotations ❌
        4. weird characters ❌
        5. expressions ❌
 
    - **Brackets**
        1. strings ✔
        2. numbers ✔
        3. variables ✔
        4. weird characters ✔
        5. expressions ✔

- Recap
    - What is an object?
    - What is the difference between dot and bracket notation?
    - How do you add a property with a key that contains special characters?
    - How do you add a property whose key and value are stored in different variables?
    - How do we loop through objects to access the values?
    - When can you only use dot notation and not bracket? 
    - When can you only use brackets and not dot?
    - How do you add a property with a key that is stored in a variable?
    - How do you access an object that is inside another object?
    - How do you create an object that is nested inside another object?

### ES6 Destructuring

Destructuring is a simplified way of defining variables and taking them outside of an object or an array.

Variable declarations:
```

        the target          the source
    const [first, second] = [true, false];
    let [first, second] = [true, false];
    var [first, second] = [true, false];

        the target          the source
    const {first, second} = {first: 0 , second: 1}
    let {first, second} = {first: 0 , second: 1}
    var {first, second} = {first: 0 , second: 1}

```

Assignment:
```

    [first, second] = [true, false];

    {first, second} = {first: 0 , second: 1}

```

## List Transforms

Which is one of the core things in functional utility methods, which is take a list or collection of data in different arrangements and then extract data from them by looping through it.

### Nested Data Structures
- Nesting
    ```

        const game = {};
        game['suspects'] = [];

        const game = {
            'suspects': []
        }

    ```

- Nesting + Loops
- Nesting + Destructuring

### Using Function
- `.forEach()` Function
- List Transformations
- Looping with `_.each` <br>
    Each using underscore style each, each takes two arguments. first thing is a list, and the second thing is the callback function also we call this the iterator function.

- `_.each()` / `forEach()` Defined
    ```
        
        _.each(['observatory','ballroom', 'library'], function(value, index, list){ ... });
        
        ['observatory','ballroom','library'].forEach(function(value, index, list){...});

    ```

    Abstracting a loop into a function.

    - Iterates over a **list** of elements, passing the values to a function.
    - Each invocation of **iterator**, the function, is called with three arguments: (element, index, list). If **list** is a JavaScript object, **iterator's** arguments will be (value, key, list).
    - For more **_.each()** click [here](http://underscorejs.org/#each)

- `_.each()` Usage
    ```

        // _.each(list,iterator)
        var rooms = ['observatory','ballroom', 'library'];
        var logger = function(val){
            console.log(val);
        };

        _.each(rooms, logger);

        // => observatory
        // => ballroom
        // => library

    ```

## Functions
- `.map()` Function <br>
    The key difference between **each** and **map** is that **each** does not return anything, the **function** does not return anything. and then **map** returns an **array** every time.

    We use **map** to take lists and transform them into a **new array**.

- `_.map()` / `.map()` Defined
    ```

        _.map([1,2,3], function (v,i,list) { console.log(v) })

    ```

    - Produces a new array of values by mapping each value in **list** through a transformation function (**iterator**).
    - Each invocation of **iterator** is called with three arguments: (element, index, list). If **list** is a JavaScript object, **iterator's** arguments will be (value, key, list)
    - For more **_.map()** click [here](http://underscorejs.org/#map)

- `_.map()` Usage
    ```

        //_.map(list, iterator)
        const weapons = ['candlestick', 'lead pipe', 'revolver'];

        const makeBroken = function (item) {
            return `broken ${item}`;
        };

        const brokenWeapons = _.map(weapons, makeBroken);

        brokenWeapons; 
        // [
        //     'broken candlestick', 
        //     'broken lead pipe', 
        //     'broken revolver'
        // ]

    ```

- `_.map()` vs `_.each()`
- Looping with `_.map()`
- `.filter()` Function <br>
    Filter is a function that takes an array in a callback and it is going to return a new array that will contain, it will only contain the values that return true from the callback. So the callback has to return a boolean, either true or false. If that callback returns true, then we're going to save it to the array. If not, we won't.

- `_.filter()` with Loop
- `_.filter()` with `_.each()`
- For more **_.filter()** click [here](http://underscorejs.org/#filter)

- **Note** : <br>
    If you're, because it takes less brainpower, but in the long run, you're not gaining the skill of properly modeling your program in your mind.

    Once you're able to model your programming in your mind, it's going to be easier for you to catch bugs without having to go back and forth, refresh, etc, rerun it, whatever it is that you're doing.

    It also will help you start to understand when your code is too complicated to hold in your mind.

    If your code is starting to get too complicated to hold in your mind, that is a sign that your code should be simplified. It can be rewritten in a way that is easy to hold in your mind at one time. 

## Functions In-Depth
- Anatomy of a function
    ```

        var add = function (a, b) {
            return a + b
        };

        add(2, 2);

        // var ... = function (...) => declaration/definition
        // add                      => function name
        // a, b                     => parameters
        // { return a + b };        => function body
        // add(2, 2);               => invocation/call-time
        // 2, 2 =>                  => arguments

    ```

- ES6: Arrow Functions
- Spread Operator
- Arguments Keyword
- Default Parameters
- Array Like-Object
- `Array.from()` Method
- `_.from()` Function

## Scope

**Overview**
1. Local
2. Global
3. Nested Scopes
4. Precedence
5. Block Scope

### Advanced Scope: Closure
- Closure Recipe

    Closure it's when functions is inside of a function that creates parent function and take advantage of that by returning a function, that retains access to it's parent funtion even after it has been executed.

## Higher-Order Functions and Callbacks

Higher order functions in JavaScript is what enables us to do these functional programming techniques, because a function in JavaScript is data. It's not true in other languages that functions can be data. 

Functions can be data, it means we can pass functions around and we can return them without invoking them. So really, higher order functions and callbacks are the core concept of functional programming.


1. Takes a function as an input (argument)
```

    element.addEventListener("change", () => {
        console.log("Our evidence is updated");
    });

```

2. Returns a function as the output
```

    const newClue = (name) => {
        const length = name.length;
        return (weapon) => {
            let clue = length + weapon.length;
            return !!(clue % 1);
        };
    };

```

3. Callbacks
```

    const ifElse = (condition, isTrue, isFalse) => {
        return condition ? isTrue() : isFalse();
    };

    ifElse(true, 
        () => { console.log(true); }, 
        () => { console.log(false); } 
    );

    // OR

    const ifElse = (condition, isTrue, isFalse) => {
        return condition ? isTrue() : isFalse();
    };

    const logTrue = () => { console.log(true); };
    const logFalse = () => { console.log(false); };
    ifElse(true, logTrue, logFalse);

```

4. Passing Arguments
```

    var increment = function (n) { return n + 1; };
    var square = function (n) { return n * n; };

    var doMathSoIDontHaveTo = function (n, func) { return func(n); };

    doMathSoIDontHaveTo(5, square); //25
    doMathSoIDontHaveTo(4, increment); //5

```

- `_.reduce()` Function
    ```

        _.reduce(collection, [iteratee=_.identity], [accumulator])
        
    ```

    Reduce takes a collection and it takes a callback function and it function is going to return one value together. Reduce always returns one function or one value at the end.

- For more **_.reduce()** click [here](https://lodash.com/docs/4.17.15#reduce)

## Functional Utilities
- Currying
    ```

        //_.curry(func, [arity=func.length])

        var abc = function(a, b, c) {
            return [a, b, c];
        };
        var curried = _.curry(abc);
        curried(1)(2)(3);
        // => [1, 2, 3]
        curried(1, 2)(3);
        // => [1, 2, 3]

    ```

    Currying is when you create a function that can later be called multiple times with different arguments.

- Composing
    ```

        const consider = (name) => { 
            return `I think it could be... ${name}`; 
        };
        const exclaim  = (statement) => { 
            return `${statement.toUpperCase()}!`; 
        };
        const blame = _.compose(consider, exclaim);
        blame('you');
        // => 'I think it could be... YOU!'

    ```

    Composing is when you take two functions and combine them, essentially.

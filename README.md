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


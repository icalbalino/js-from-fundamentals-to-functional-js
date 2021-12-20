// Scope
// Scope is just the area where a variable has access to some value.

(function () {
    
    describe('Scope Exercises', function () {
        
        var ACTUAL;

        // This resets the value of ACTUAL (to null) before each test is run
        beforeEach(function () {
            ACTUAL = null;
        });

        it('a function has access to its own local scope variables ', function () {
            var fn = function () {
                var name = 'inner';
                ACTUAL = name;
            };
            fn();
            expect(ACTUAL === 'inner').to.be.true;
        });

        it('inputs to a function are treated as local scope variables', function () {
            var fn = function (name) {
                ACTUAL = name;
            }
            fn('inner');
            expect(ACTUAL === '???').to.be.true; // => 'inner'
        });

        it('block scope can be created with let', function () {
            var fn = function () {
                var where = 'outer';
                {
                    let where = 'inner';
                }
                ACTUAL = where;
            };
            fn();
            expect(ACTUAL === '???').to.be.true; // => 'outer'
        });

        it('a function has access to the variables contained within the same scope that function was created in', function () {
            var name = 'outer';
            var fn = function () {
                ACTUAL = name;
            };
            fn();
            expect(ACTUAL === '???').to.be.true; // => 'outer'
        });

        it('a functions local scope variables are not available anywhere outside that function', function () {
            var firstFn = function () {
                var localToFirstFn = 'inner';
            };
            firstFn();
            expect(function () {
                ACTUAL = localToFirstFn;
            }).to.throw();
            expect(ACTUAL === '???').to.be.true; // => null
        });

        it('a functions local scope variables are not available anywhere outside that function, regardless of the context its called in', function () {
            var firstFn = function () {
                var localToFirstFn = 'first';
                // although false, it might seem reasonable to think that the secondFn 
                // (which mentions the localToFirstFn variable), 
                // should have access to the localToFirstFn variable, 
                // since its being called here from within the scope where that variable is declared.
                secondFn();
            };
            var secondFn = function () {
                ACTUAL = localToFirstFn;
            }
            expect(function () {
                // of course, calling the secondFn should throw an error in this case, 
                // since secondFn does not have access to the localToFirstFn variable.
                secondFn();
            }).to.throw();
            expect(function () {
                // in addition, calling the firstFn (which in turn calls the secondFn) should also throw, 
                // since it the calling context of secondFn has no influence over its scope access rules.
                firstFn();
            }).to.throw();
            expect(ACTUAL === '???').to.be.true; // => null
        });

        it('if an inner and an outer variable share the same name, and the name is referenced in the inner scope, the inner scope variable masks the variable from the outer scope with the same name. This renders the outer scope variables inaccessible from anywhere within the inner function block', function () {
            var sameName = 'outer';
            var fn = function () {
                var sameName = 'inner';
                ACTUAL = sameName;
            };
            fn();
            expect(ACTUAL === '???').to.be.true; // => 'inner'
        });

        it('if an inner and an outer variable share the same name, and the name is referenced in the outer scope, the outer value binding will be used', function () {
            var sameName = 'outer';
            var fn = function () {
                var sameName = 'inner';
            };
            fn();
            ACTUAL = sameName;
            expect(ACTUAL === '???').to.be.true; // => 'outer'
        });

        it('a new variable scope is created for every call to a function, as exemplified with a counter', function () {
            var fn = function () {
                // The '||' symbol here is being used to set a default value for innerCounter.
                // if innerCounter already contains a truthy value, then the value in that variable will be unchanged.
                // if it is falsey however (such as if it were completely uninitialized), then this line will set it to the default value of 10.
                var innerCounter = innerCounter || 10;
                innerCounter = innerCounter + 1;
                ACTUAL = innerCounter;
            };
            fn();
            expect(ACTUAL === '???').to.be.true; // => 11
            fn();
            expect(ACTUAL === '???').to.be.true; // => 11
        });

        it('a new variable scope is created for each call to a function, as exemplified with uninitialized string variables', function () {
            // This is a longer form of the same observation as above, using strings instead of numbers 
            var fn = function () {
                var localVariable;
                if (localVariable === undefined) {
                    // the variable will be initialized for the first time during this call to fn
                    ACTUAL = 'alpha';
                } else if (localVariable === 'initialized') {
                    // the variable has already been initialized by a previous call to fn
                    ACTUAL = 'omega';
                }
                // now that actual has been set, we will initialize localVariable to refer to a string
                localVariable = 'initialized';
            };
            fn();
            expect(ACTUAL === '???').to.be.true; // => 'alpha'
            fn();
            expect(ACTUAL === '???').to.be.true; // => 'alpha'
        });

        it('an inner function can access both its local scope variables and variables in its containing scope, provided the variables have different names', function () {
            var outerName = 'outer';
            var fn = function () {
                var innerName = 'inner';
                ACTUAL = innerName + outerName;
            };
            fn();
            expect(ACTUAL === '???').to.be.true; // => 'innerouter'
        });

        it('between calls to an inner function, that inner function retains access to a variable in an outer scope. modifying those variables has a lasting effect between calls to the inner function', function () {
            var outerCounter = 10;
            var fn = function () {
                outerCounter = outerCounter + 1;
                ACTUAL = outerCounter;
            };
            fn();
            expect(ACTUAL === '???').to.be.true; // => 11
            fn();
            expect(ACTUAL === '???').to.be.true; // => 12
        });

        it('the rule about retaining access to variables from an outer scope still applies, even after the outer function call (that created the outer scope) has returned', function () {
            var outerFn = function () {
                // the contents of this function is the same as the entire body of the previous test
                var counterInOuterScope = 10;
                var innerIncrementingFn = function () {
                    counterInOuterScope = counterInOuterScope + 1;
                    ACTUAL = counterInOuterScope;
                };
                innerIncrementingFn();
                expect(ACTUAL === '???').to.be.true; // => 11
                innerIncrementingFn();
                expect(ACTUAL === '???').to.be.true; // => 12

                // here, we retain a reference to the newly created inner function for later,
                // by assigning it to the global scope (window)
                window.retainedInnerFn = innerIncrementingFn;
            };

            // before we run outerFn, there will be no innerFn exported to the global scope
            expect(window.retainedInnerFn).to.equal.undefined;
            // running this outerFn function should have the same effect as running the whole previous test,
            // with the addition of placing the innerFn somewhere that we can reach it after outerFn has returned
            outerFn();
            expect(window.retainedInnerFn).to.be.a('function');
            // even though the outerFn has returned once the only call to it was completed a couple of lines above,
            // the inner function remains available in the global scope, and still has access to the variables
            // of that containing scope where it was first created  
            window.retainedInnerFn();
            expect(ACTUAL === '???').to.be.true; // => 13
        });

    });

})();


// Advanced Scope: Closure
// Closure
var myAlert = () => {
    const x = "Help! I think I found a clue!";
    const alerter = () => {
        alert(x);
    };
    alerter();
};
myAlert();

// Closure part 2
var myAlert = () => {
    const x = "Help! I think I found a clue!";
    const alerter = () => {
        alert(x);
    };
    setTimeout(alerter, 1000);
    console.log('what happens first? this log or the alert?');
};
myAlert();


// Creating Closure
var myAlert = () => {
    const x = "Help! I think I found a clue!";
    let count = 0;
    const alerter = () => {
        alert(`${x} ${++count}`);
    };
    return alerter;
};
const funcAlert = myAlert(); 
const funcAlert2 = myAlert(); 
funcAlert();


// Closure Demonstration
var newClue = (name) => {
    const length = name.length;
    return (weapon) => {
        let clue = length + weapon.length;
        return !!(clue % 2);
    };
};
const didGreenDoItWithA = newClue('Green');
didGreenDoItWithA('candlestick');
didGreenDoItWithA('lead pipe');

// Closure Demonstration 2
function countClues() {
    var n = 0;
    return {
        count: function() { return ++n; },
        reset: function() { return n = 0; }
    };
};

//ES6 equivalent
const countClues = () => {
    let n = 0;
    return {
        count: () => n++,
        reset: () => n = 0
    };
};


// Closure Recipe
const findSomeone = () => {
    const speak = () => {
        console.log(who);
    };
    let who = 'Why hello there, Prof Plum!';
    return speak;
};
const someoneSpeak = findSomeone()

// Closure Recipe 2
const makeTimer = () => {
    let elapsed = 0;
    const stopwatch = () => { return elapsed; };
    const increase = () => elapsed++;
    setInterval(increase, 1000);
    return stopwatch;
};
let timer = makeTimer();

// const makeTimer = () => {
//     console.log('initialized');
//     let elapsed = 0;
//     console.log(elapsed);
//     const stopwatch = () => {
//         console.log('stopwatch');
//         return elapsed;
//     };
//     const increase = () => elapsed++;
//     setInterval(increase, 1000);
//     return stopwatch;
// };
// const timer = makeTimer();

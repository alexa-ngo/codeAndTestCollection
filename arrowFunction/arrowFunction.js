// Arrow Function

// Arrow functions are expressions instead of statements which explains why we don't use the function keyword or a function name.

// General form:
//          const sum = (x + y) => { return x + y };

// If the body of the function is a single return statement, we can omit the return keyword, the semicolon that goes with it, and the curly braces.
//          So the general form would look like this:
//          const sum = (x + y) => x + y;

// If an arrow function only has one parameter, we can write it like this:
//          const polynomial = x => x*x + 2*x + 3;

// If an arrow function doesn't have any arguments it would look like this:
//          const constantFunction = () => 98;

// We have to put the object literal inside parentheses to avoid syntatic ambiguity between the curly braces of a function body and the curly braces of an oject literal.

// const f = x => { return { value: x }; };     // Good: f() returns an object
// const g = x => { {value: x }};               // Good: g() returns an object
// const h = x => { value: x };                 // Bad: h() returns nothing
// const i = x => { v: x, w: x};                // Bad: Syntax Error


// Map: Using .map let's square some numbers.
let squares = [2, 4, 6].map(x => x * x);        // squares == [ 4, 16, 36 ]

// Filter: Using .filter let's only return the names.
let filtered = [1, "Shawn", "Prissy", 6, 8, "Ann"].filter(x => typeof (x) === "string");       // fitlered == [ 'Shawn', 'Prissy', 'Ann' ]

// Reduce the array.
const array = [3, 6, 7, 89, 1, 4, 41];
const sum = array.reduce((a, b) => a + b);      // sum === 151

// Which integer is smaller?
const theInteger = (input) => (input > 14 ? 14 : input);
theInteger(21); // 14
theInteger(3);  // 3


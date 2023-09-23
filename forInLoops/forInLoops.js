// Topic: For In Loops

// For/in loops looks a lot like a for/of loop.
// The for/of loop requires an iterable object after the of, a for/in loop works with any object after the in. 
// The for/of loop is new in ES6, while the for/in has been part of JavaScript since the beginning.

// General syntax:

// for(variable in object)
//      statement

// How the for/in loop works:
// 1. The JavaScript interpreter first evaluates the object expression.
// 2. If it evalues to null or undefined, the interpreter skipps the loop and moves onto to the next statement.
// 3. The interpreter now executes the body of the loop once for each enumerable propertyu of the object.
// 4. Before each iteration, the interpreter evaluates the variable expression and assigns the name of the property (a string value) to it.
// 5. The variable may evalulate differently each time.

// Tip:
// When working with arrays, you almost want to use for/of instead of for/in.
let o = {
    x: 1,
    y: 2,
    z: 3
};

let a = [], i = 0;
for (a[i++] in o);  // returns: [ 'x', 'y', 'z' ]

for (let i in a) {
    console.log(i);
};


// Iterating over Object Properties
// Scenario: We are going to iterate over employee information

const employee = {
    name: 'Alexa',
    id: 123,
    age: 30,
    hobbies: 'collecting cars',
    '': 'hello'
};

for (const i in employee) {
    console.log(i);
    console.log(employee[i]);
}
// Switch

// The cases in the switch statement must match with the === identity operator, not the == equality operator, 
// so the expressions must match without any type conversion.

// Here's the switch statement syntax:

// switch(expression){
//      statements   
// }

// Basic Example
const n = 4;

switch (n) {
    case 1:
        console.log('This is 1.');
        break;
    case 2:
        console.log('This is 2.');
        break;
    case 3:
        console.log('This is 3.');
        break;
    default:
        console.log('This is the default.');
        break;
}

// Convert a value to a string in a way that depends on the type of the value
function convert(x) {
    switch (typeof x) {
        case "number":
            return x.toString(16);
        case "string":
            return '"' + x + '"';
        default:
            return String(x);
    }
}

console.log(convert(1024)); // expected result is 400
// The try/catch/finally Statement

// Here is the syntax for try/catch/finally
// try {
//     //
// }
// catch (e) {
//     //
// }
// finally {
//     //
// }

function factorial(x) {
    if (x < 0) throw new Error("x must not be negative");
    // Otherwise, compute a value and return normally
    let f;
    for (f = 1; x > 1; f *= x, x--) /* empty */;
    return f;
}

try {
    let f = factorial(n);
    console.log(f)
}
catch (ex) {
    console.log('This is the catch statement!')
}
finally {
    console.log('This is the finally block.')
}

const n = 5; // This demo reachs both the catch and finally block. 

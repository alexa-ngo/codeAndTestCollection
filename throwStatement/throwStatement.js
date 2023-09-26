// The Throw Statement

// Exception is a signal that some exceptional condition or error has occurred. 
// We would throw an exception and will have a catch block to recover from the exception. If no catch block exists among the caller functions, 
// the program will end.

// An exception happens when a runtime error occurs.
// A runtime error is an error in logic or arithmetic that must be detected at run time. 

// Here is the syntax for the throw statement:

// throw expression;

// How the throw statement works:
// 1. name property: An Error object has a name property that specifies the type of error and a message property 
// that holds the string passed the constructor function. 
// 2. exception is thrown: When an exception is thrown, the JS interpreter immediately stops normal program execution and jumps to the neares exception handler
// 3. Exception handlers are written using the catch clause of the try/catch/finally statement
// 4. If the block of code in which the exception was thrown does not have an associated catch clause, the interpreter checks the next-highest
// enclosing block of code to see if there is an exception handler associated with it. 
// 5. This continues until a handler is found.
// 6. If an exception is thrown in a function that does not contain a try/catch/finally statement to handle it, the exception propagates up to the code that invoke the function.
// 7. Exceptions propagate up through the lexical structure of JS methods and up the call stack. 
// 8. If no exception handler is ever found, the exception is treated as an error and is reported to the user.


function getFirstAndLastName(firstName, lastName) {
    if (firstName !== typeof String || lastName !== typeof String) {
        throw new Error('The input is not a string!');
    }
}

try {
    getFirstAndLastName(45, 'Smith');
} catch (e) {
    console.error(e);
    // Expected output: Error: The input is not a string!
}





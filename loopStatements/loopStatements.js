// Loops

// There are five looping statements: while, do/while, for, for/of (and its for/await variant), and for/in.

// The while statement is JavaScript's basic loop with the following syntax.

// while (expression)
//      statement

// Execute a while loop counting from 10 down by increments of 2, and console.log "Blast off!" when the count is equal to zero.
let count = 10;
while (count > 0) {
    console.log(count);
    count -= 2;
    if (count === 0) {
        console.log('Blast off!');
    }
}

// Do/while loop

// The do/while loop is less common than a while loop.
// In a do/while loop the loop expression is tested at the bottom of the loop rather than at the top.
// The body of the loop is always executed at least once.

// Here is the syntax:

// do
//      statement
// while (expression);


// Here is an example of a do/while loop.
function doWhile() {
    let result = '';
    let i = 0;

    do {
        i++;
        result = result + i;
    } while (i < 5);
    console.log(result);
}

doWhile();
// Continue

// Features of the Continue statement:
// 1. restarts a loop at the next iteration
// 2. in a while loop, the continue statement returns directly to its condition
// 3. in a for loop, the increment expression is first evaluated and then returns to the condition


// Example 1
let text = '';

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    text = text + i;
}

console.log(text)


// Example 2
// Scenario: return only the words that start with the letter D in the data array.

const data = ['animal', 'baby', 'dog', 'duck', 'elephant', 'daisy'];

let result = [];

for (let i = 0; i < data.length; i++) {
    if (data[i].charAt(0) !== 'd') {
        continue;
    }
    result.push(data[i]);
}

console.log(result);
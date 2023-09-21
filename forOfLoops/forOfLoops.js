// For of Loops

// This is an exercise with For of Loops. 
// These loops are unique because:
// 1. works with iterable objects (arrays, strings, sets, and maps)


// Looping though elements of an array
// Scenario: counting the number of employees in each department. The sum is the number of employees in the company.
let department = [1, 4, 5, 2, 10, 88], sum = 0;
for (let people of department) {
    sum += people;
}
console.log('Total number of people in the company:', sum);  // expected sum is 110


// Looping through elements of an object throws a TypeError at runtime.
// let awards = { gold: 3, silver: 2, bronze: 1 };
// for (let each of awards) { // throws TypeError because awards is not iterable
//     console.log(each);
// }

// However, we can iterate through the properties of an object using a for/in loop, or 
// the for/of with the Object.keys()method:
// Scenario: Make a list of all the car brands in our inventory.
let inventory = { Mercades: 5, BMW: 10, Tesla: 3, Toyota: 21, Honda: 19, Hyundai: 4, Ford: 11, Jeep: 9 };
let carBrands = "";
for (let brand of Object.keys(inventory)) {
    carBrands += `${brand}, `;
}
carBrands = carBrands.replace(/,\s*$/, ""); // This trims the last comma after Jeep.
console.log(carBrands); // Expected: "Mercades, BMW, Tesla, Toyota, Honda, Hyundai, Ford, Jeep"


// Looping through elements of a string
// Scenario: count the number of characters for each letter in the word "The Lion King"
let frequency = {};
for (let letter of "The Lion King") {
    if (frequency[letter]) {
        frequency[letter]++;
    } else {
        frequency[letter] = 1;
    }
}
console.log(frequency); // Expected: { T: 1, h: 1, e: 1, ' ': 2, L: 1, i: 2, o: 1, n: 2, K: 1, g: 1 }


// Looping through elements of a set
let text = "come fly with me and come dance with me";
let wordSet = new Set(text.split(" "));
let unique = [];
for (let word of wordSet) {
    unique.push(word);
}
console.log(unique); // Expected: [ 'come', 'fly', 'with', 'me', 'and', 'dance' ]


// Looping though elemenets of a map
let m = new Map([["George Washington", "1"], ["Benjamin Franklin", "6"], ["Abraham Lincoln", "16"]]);
for (let [key, value] of m) {
    console.log(`The President is ${key} and they are the ${value} st/th President of the United States.`);
}



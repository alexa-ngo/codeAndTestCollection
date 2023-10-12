// Array Datatype

// Remove duplicate elements from an array and then convert the array to a set
// and then immediately convert the set back to an array using a spread operator:
let animal = [..."elephant"];
console.log([...new Set(animal)]); // ["e", "l", "p", "h", "a", "n", "t"]

//let a = new Array();
let a = new Array(5, 4, 3, 2, 1, "testing, testing");
console.log(a);

// Deleting an element from the array makes that index sparse
let b = [1, 2, 3, 4];
delete b[2];
console.log('After deleing element b the array is ', b); // [1, 2, <1 empty item>, 4]

let dense = b.filter(() => true);
console.log('Let us make it dense now', dense); // [1, 2, 4]

// forEach
let age = [30, 32, 34, 60];
let sum = 0;
// Compute the sum of the elements of the array
age.forEach(value => { sum += value });
console.log('The total age of the age array: ', sum);

// Now we are going to increment each array element by 5
age.forEach(function (v, i, a) {
    console.log('here is the current value of the array:', v);
    console.log('here is the array before:', a);
    console.log('here is the index: ', i);
    console.log(' ');
    a[i] = v + 5;
    console.log('here is the a after: ', a);
});
console.log(age); //[35, 37, 39, 65];

// map()
let c = [2, 4, 6];
console.log(c.map(x => x * x));   // [4, 16, 36];

// filter()
let f = [9, 8, 7, 6, 5, 4, 3, 2, 1];
//console.log(f.filter(x => x < 5)); // [4, 3, 2, 1];

console.log(f.filter((x, i) => i % 2 === 0)); // [9, 7, 5, 3, 1]; Reutnrs every other

// flattening arrays
console.log([1, 2, [3]].flat());

// push all the arrays of one array into another array
let stack = [1, 2, 3, 4, 5];
values = [99, 100, 101];

stack.push(6);
console.log('stack before', stack); // [1,2,3,4,5,6]
stack.push(...values);
console.log('stack after: ', stack); // [1,2,3,4,5,6,99,100,101]

// shift 
let hi = [];
hi.push("hello", "there");
console.log('This is hi: ', hi);  // ['hello', 'there']
hi.shift();
console.log('This is after using shift: ', hi)  // ['there']
hi.push("Welcome", "to", "the", "party");
console.log('pushing: "Welcome", "to", "the", "party": ', hi)  // ['there', 'Welcome', 'to', 'the', 'party']

// unshift
let nice = [];
nice.unshift(1)
nice.unshift(2)
console.log(nice); // [2,1]

nice = [];
nice.unshift(1, 2); // [1, 2]
console.log(nice)

// every() and some()
// We input a predicate function (functions that returns a single True or False). 
// Every() will return true if all the elenets in the array are true and some() will return true if at least one element of the array is true.
let friends = [1, 2, 3, 4, 5, 20];
console.log('every friend is less than 20', friends.every(x => x < 0)); // False
console.log('some friends are less than 20', friends.some(x => x < 20)); // True

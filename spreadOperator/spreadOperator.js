// Spread Operator

/*
The spread(...) syntax allows an interable, such as an array or string, to be expanded.
Objects: the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
Arrays: the spread syntax expands an array into its elements
Only iterable values, like Array and String, can be spread in array literals and argument lists.
Many objects are not iterables including all plain objects that lack a Symbol.iterator method.

function arguments list (myFunction(a, ...iterableObj, b))
Array literals ([1, ...iterableObj, '4', 'five', 6])
Object literals ({...obj, key: 'value' })
*/

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Expected output: 6


const array = [1, 2, 3];
const obj = { ...array };
console.log(obj); // Expect: { '0': 1, '1': 2, '2': 3 }


// Only strings have enuerable own properties
const myName = { ...true, ..."alexa", ...10 };
console.log(myName); // { '0': 'a', '1': 'l', '2': 'e', '3': 'x', '4': 'a' }


const schoolSupplies = ["pens", "paper"];
const toBuy = ["backpack", ...schoolSupplies, "calculator", "waterbottle"];
console.log(toBuy); // [ 'backpack', 'pens', 'paper', 'calculator', 'waterbottle' ]


// Merge multiple objects into one new object
const cars1 = [{ toyota: "supra", dollars: 99999 }, { honda: "civic", dollars: 83832 }];
const cars2 = { mercades: "c-class", dollars: 94403 };
const cars3 = { tesla: "model Y", dollars: 30439 };

const mergedCars = { ...cars1, ...cars2, ...cars3 };
console.log(mergedCars);

// Expected results of merged cars:
// {
//     '0': { toyota: 'supra', dollars: 99999 },
//     '1': { honda: 'civic', dollars: 83832 },
//     mercades: 'c-class',
//     dollars: 30439,
//     tesla: 'model Y'
//   }


// iterate throught both arrays 

const array1 = ["priscilla", "dana", "shanna", "bernice"];
const array2 = ["business", "economics", "programmer", "devops"];

function careers(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        console.log(...array1[i], " ", ...array2[i]);
    }
};

careers(array1, array2);

/*
p r i s c i l l a   b u s i n e s s
d a n a   e c o n o m i c s
s h a n n a   p r o g r a m m e r
b e r n i c e   d e v o p s
*/
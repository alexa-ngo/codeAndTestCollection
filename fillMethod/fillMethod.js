// Fill Method

// The fill method sets the elements of an array, or a slice of an array to what we specify it as.
// Returns a mutated array.

// first argument: the value to set array elements to.
// second argument (optional): specifies the starting index. If it's omitted, filling starts at index 0.
// third argument (optional): specifies the ending index of array elements up to by it doesn't not include it.
//                            If the third argument is omitted, then the array is filled from the start index to the end.


let a = new Array(6);               // Start with no elements and length 5
a.fill("hi")                        // => [ 'hi', 'hi', 'hi', 'hi', 'hi', 'hi' ]; fill the array with "hi"


// Now let's fill in the position of 1 to the end of the array with an animal object
const animal = {
    "name": "Dragon",
    "color": "pink",
    "age": 45
}

a.fill(animal, 1)
// => ; fill with the animal object starting at index 1
// [
//     'hi',
//     { name: 'Dragon', color: 'pink', age: 45 },
//     { name: 'Dragon', color: 'pink', age: 45 },
//     { name: 'Dragon', color: 'pink', age: 45 },
//     { name: 'Dragon', color: 'pink', age: 45 },
//     { name: 'Dragon', color: 'pink', age: 45 }
//   ]


// Now let's use the integer of 3 for index 3 to 5
a.fill(3, 3, -2)
// =>
// [
//     'hi',
//     { name: 'Dragon', color: 'pink', age: 45 },
//     { name: 'Dragon', color: 'pink', age: 45 },
//     3,
//     { name: 'Dragon', color: 'pink', age: 45 },
//     { name: 'Dragon', color: 'pink', age: 45 }
//   ]


// Now let's fill index 4 with "Goodbye".
a.fill("Goodbye", 4, -1)

// Now let's fill in index 4 with "Goodbye" and try to wrap it around to even index 2!
a.fill("Goodbye", 4, -4)        // it doesn't work

a.fill("wrap around", -1, -4)   // it still doesn't work

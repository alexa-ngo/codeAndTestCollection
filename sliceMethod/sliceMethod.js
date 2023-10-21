// Slice Method

// slice returns the first argument and all subsequent elements up to, but not including,
// the element specified by the second argument.

// Using one argument: returns all elemnts from the start position to the end of the array.
// Using one or two negative arguments:

let list = ["a", "b", "c", "d"];

list.slice(2)         // Expected ['c', 'd']
list.slice(0, -2)     // Expected ['a','b]
list.slice(0, 3);     // Expected ['a', 'b', 'c']
list.slice(1, -1);    // Expected ['b', 'c']
list.slice(-2, -2);   // Expected []
list.slice(-4, -3);   // Expected ['a']
list.slice(-3, -2);   // Expected ['b']
list.slice(-1, -3);   // Expected []


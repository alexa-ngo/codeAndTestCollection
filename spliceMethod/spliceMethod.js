// Splice Method

// Splice inserts or removes elements from an array. It modifies the array on which it is invoked.
// It can delete, insert, or perform both operations at the same time. 
// The first argument is the position where the insertion/deletion is to begin.
// The second argmument is the length. If the second argument is omitted, 
// all array elements from the start element to the end of the array are removed.
// splice() returns an array of the deleted elements, or an empty array if no elements were deleted.


let names = ["Amy", "Ann", "Carmen", "Lynn", "Prissy", "Sabrina", "Shawn"]
names.splice(3)     //  ["Lynn", "Prissy", "Sabrina", "Shawn"]; list is now ["Amy", "Ann", "Carmen"]
names.splice(1, 2)  // ["Ann", "Carmen"]; list is now ["Amy"]
names.splice(0, 1)  // ["Amy"]; list is now []


// The first two arguments to splice() specify which array elements are to be deleted.
// Any arguments that come after are to be inserted into the array starting at the position specified by the first array.

let girls = ["Julia", "Lynn", "Pris", "Shawny", "Shirley"]
girls.splice(2, 2, "Alexa", "Mindy")        // []; girls is now ["Julia", "Lynn", "Alexa", "Mindy", "Shirley"]
girls.splice(0, 1, ["Dayna", "Joey"], 5)    // ["Julia"]; girls is now [["Dayna", "Joey"], 5, "Lynn", "Alexa", "Mindy", "Shirley"];

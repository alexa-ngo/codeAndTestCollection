// The Map Class

// The purpose of Map:
//      - Map objects holds key-value pairs and remembers the point of the original insertion order of the keys.

// Features of a Map object:
//      - Map object represents a set of values known as keys, where each key has another value associated with (or "mapped to") it.
//      - A key may only occur once.
//      - Both objects or primitive values may be used as either a key or a value.
//      - We may iterate though the map object using for...of which returns [key, value] for each iteration.
//      - We may add to the map by passing other maps into the original map.
//      - Map compares keys by identity and not equality so if we use an object or array as a key, it will be considered
//          different from every other object and array, even those with exactly the same properties or elements.
//      - the spread operator will give us an array of an array.

// Unique feature: if we use .forEach, the value parameter comes before the key parameter like below:
//          m.forEach((value, key) => {});
//          The forEach() method of a map passes the map value first and the map key second.

// Methods we can use: get(), has(), set(), delete(), clear(), size

// An application of the map class:
//      - using maps are fast for looking up, but it's not as fast as arrays
//      - try not to use Object as a prototype which may allow an attacker to override the Object's prototype which leads to injection attacks.


let x = new Map();

x.size                          // 0
x.set("Lynn", "math");
x.set("Prissy", "art");
x.set("Mindy", "exercise");
x.set("Shawn", "computer");
x.set("Shirley", "speech");     // Map(5) { 'Lynn' => 'math', 'Prissy' => 'art', 'Mindy' => 'exercise', 'Shawn' => 'computer', 'Shirley' => 'speech' }
x.get("Shirley")                // "speech"
console.log('Here is bob', x.get("Bob"));

let y = new Map(x);
y.set("dog", "USA");
y.set("cat", "Europe");
y.set("unicorn", "Asia");

x.size                          // 5
x.has("math");                  // false
x.has("Shawn");                 // true
x.delete("Mindy")


let z = new Map(y);
console.log('Map of z', z);
console.log(x)                      // Map(4) { 'Lynn' => 'math', 'Prissy' => 'art', 'Shawn' => 'computer  'Shirley' => 'speech' }
//  const z = [...x]                // [[ 'Lynn', 'math' ], [ 'Prissy', 'art' ], [ 'Shawn', 'computer' ], [ 'Shirley', 'speech' ]]

// [...x.keys()];     // [ 'Lynn', 'Prissy', 'Shawn', 'Shirley' ]
// [...x.values()];    // [ 'math', 'art', 'computer', 'speech' ]
// [...x.entries()];   // [ [ 'Lynn', 'math' ], [ 'Prissy', 'art' ], [ 'Shawn', 'computer' ], [ 'Shirley', 'speech' ]]


for (let [key, value] of x) {
    // fill in    
};

x.forEach((value, key) => {
    console.log(value, key)
});

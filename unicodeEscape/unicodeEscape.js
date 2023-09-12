console.log("\u{1F600}");
console.log(0b10101);
let fraction = 0.123_456_789;
console.log(fraction);

let billion = 1_000_000_000;
console.log(billion);

// Date and Time
let now = new Date();
let ms = now.getTime(); // Convert to a millisecond timestamp.
let iso = now.toISOString(); // Convert to a string in standard format.
console.log('Millisecond', ms);
console.log('Standard format', iso);

// Two lines
console.log('two\nlines');

// One-line
console.log('one\
long\
line');

// Two-line string written on two lines:
console.log(`the newline characetrs at the end of this line
is included literally in this string`);

let s = "hello, world";
console.log(s.split(", "));

console.log("<>".repeat(5));


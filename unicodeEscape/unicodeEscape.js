// console.log("\u{1F600}");
// console.log(0b10101);
// let fraction = 0.123_456_789;
// console.log(fraction);

// let billion = 1_000_000_000;
// console.log(billion);

// // Date and Time
// let now = new Date();
// let ms = now.getTime(); // Convert to a millisecond timestamp.
// let iso = now.toISOString(); // Convert to a string in standard format.
// console.log('Millisecond', ms);
// console.log('Standard format', iso);

// // Two lines
// console.log('two\nlines');

// // One-line
// console.log('one\
// long\
// line');

// // Two-line string written on two lines:
// console.log(`the newline characters at the end of this line
// is included literally in this string`);

// let s = "hello, world";
// console.log(s.split(", "));

// console.log("<>".repeat(5));

// let o = { x: 1 };
// console.log('before', o);
// o.x = 2;
// console.log('after', o.x);

// function square(x, l) {
//     l?.(x);
//     return x * x;
// }

// const x = 5;
// const l = null;
// const result = square(x, l);
// console.log('Result of the square function', result); // expect 25

// let f = null, x = 0;

let point = { x: 1, y: 1 };
console.log("x" in point); // expeect: true
console.log("z" in point); // expect: false
console.log("toString" in point); // expect true because the object inherits toSting method;

// Goal: Reduce the names in the array into one string separated by new line character.
// Use concat, reduce, and the new line character


let names = ["Annie", "Priscilla", "Shanna", "Sabrina", "Shirley"];
let concatNames = names.concat();
const allnames = concatNames.reduce((a, b) => a + "\n" + b);
console.log(allnames);


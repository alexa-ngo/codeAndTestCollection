// Reduce the names in the array into one string separated by a new line character.

const names = ["Annie", "Priscilla", "Shanna", "Sabrina", "Shirley"];
const allnames = names.reduce((a, b) => a + "\n" + b);
console.log(allnames);


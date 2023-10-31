// Object Inheritance

/* In inheritance, every time we create a new instance of a class with new, we are creating an object with that prototype object.
If we are querying for the property x in the object o, and if o does not have an own property with that name, the prototype object of o is queried for the property x.
The querying continues until the property x is found or until an object with a null property is returned. 

The prototype attribute for an object creates a chair or linked list from whch the properties are inherited. 
*/

let tree = {};
tree.height = 2;
let evergreen = Object.create(tree);
evergreen.color = "red";
let redwood = Object.create(evergreen);
redwood.height = 300;
let f = redwood.toString();
console.log(`Trees at the national park are ${redwood.height} feet tall and have ${redwood.color} leaves.`);


class Car {
    constructor() {
        this.drive = sayHi();
    }
};

function sayHi() {
    console.log(`Hi`);
};


const carTest = new Car();
Car.prototype.x = 2;

const carA = new Car();
const carB = new Car();
const carC = new Car();

console.log('This is carA.x expect 2: ', carA.x); // Expect: 2
console.log('This is carB.x: ', carB.x); // Expect: 2
console.log('This is carC.x: ', carC.x); // Expect: 2

Car.prototype.x = 3;

console.log('This is carA.x expect 3: ', carA.x); // Expect: 3
console.log('This is carB.x: ', carB.x); // Expect: 3
console.log('This is carC.x: ', carC.x); // Expect: 3

// Car.x = 4;

// console.log('This is carA.x: ', carA.x); // Expect: 3
// console.log('This is carB.x: ', carB.x); // Expect: 3
// console.log('This is carC.x: ', carC.x); // Expect: 3

Car.prototype.x = 8;

console.log('This is carA.x expect 8: ', carA.x); // Expect: 8
console.log('This is carB.x: ', carB.x); // Expect: 8
console.log('This is carC.x: ', carC.x); // Expect: 8


// carA inherits from Object.prototpe and now has own color property and carB and carC does not have it.
carA.color = "red";
console.log('This is carA with color property', carA);
console.log('This is carB with color property', carB);
console.log('This is carC with color property', carC);

let carAUpgraded = Object.create(carA);
carAUpgraded.seats = "leather";
console.log('This is carAupgraded with leather seats', carAUpgraded);

console.log('This is carA.x: ', carA); // Expect: 3
console.log('This is carB.x: ', carB); // Expect: 3
console.log('This is carC.x: ', carC); // Expect: 3

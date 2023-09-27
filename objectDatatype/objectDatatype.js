// Objects

/**
We will be:
- creating
- querying
- setting
- deleting
- testing
- enumerating 

Explain how to:
- extend
- serialize
- define important methods

Features: 
- unordered collection of properties
- objects are mutable and manipulated by reference rather than by value
- A property has a name and value and three property attributes
    - writable attribute: specifies whether the value of the property can be set
    - enumerable: specifies whether the property name is returned by a for/in loop
    - configurable: specifies whether the property can be deleted and whether its attributes can be altered
*
*/

// Creating a car object

const car = {
    isTruck: false,
    printInformation: function () {
        console.log(`The make of this car is a ${this.make}. Am I a truck ${this.isTruck}.`);
    },
};

const me = Object.create(car);

me.make = 'Honda';  // "make" is a property set on "me", but not on "car"
me.isTruck = true;  // Inherited properties can be overwritten

me.printInformation();
// Expected output: "The make of this car is a Honda. Am I a truck? true."
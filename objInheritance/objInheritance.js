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

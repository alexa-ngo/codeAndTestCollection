// Set Class

// Purpose of a set: A set is a container that stores ONLY unique values.

// Applications of a set: Storing unique names

// Features of the Set Class:
//      - not ordered or indexed, value is either a member of the class or not, it is not possible to ask for how many times a value appears in a set
//      - can be an array or iterable object
//      - used for membership testing
//      - using an array as a set can be much slower than using a real Set object
//      - a set is iterable so we can use a for/of loop to enumerate all of the elements of a set
//      - since Set objects are iterable, we are able to convert them to arrays and argument lists with the ... spread operator
//      - unindexed collections BUT it remembers the order in which it was inserted in. The first element inserted will be the first one iterated.

// Possible properties: size, add(), delete(), clear(), has(), forEach(), for/of loop
//      - add(): takes a single argument, returns the set it was invoked on. We can chain it like: s.add('a').add('b').add('c');.
//      - delete(): deletes a single set element at a time. Delete() returns a boolean.
//                  If the value we want to remove was removed, delete() returns true, otherwise it does nothing and returns false.
//      - forEach(): passes array indexes as the second argument to the function.
//      - The number 1 and string "1" are distinct values and are not the same. When these values are objects, they are compared as if with ===.
//        which is why we can't delete it from code. In order to do that, we have to pass a reference to exactly the same array.



const friends = new Set(['Amy', 'Carmen', 'Christine', "Lynn", 'Priscilla', 'Shawn']);

// size
friends.size    // 6


// for/of loop
let listOfGuest = "";
function invites(friends) {
    for (let eachFriend of friends) {
        listOfGuest += eachFriend + " ";
    }
    return listOfGuest
};  // Amy Carmen Christine Lynn Priscilla Shawn


// add() 
friends.add('Alexa')       // Set(7) {'Amy', 'Carmen', 'Christine', 'Lynn', 'Priscilla', 'Shawn', 'Alexa'}


// delete()
friends.delete('Amy')      // true; Set(6) { 'Carmen', 'Christine', 'Lynn', 'Priscilla', 'Shawn', 'Alexa' }
friends.delete('Carmen')   // true: Set(5) { 'Christine', 'Lynn', 'Priscilla', 'Shawn', 'Alexa' }
friends.delete('Shawn')    // true: Set(4) { 'Christine', 'Lynn', 'Priscilla', 'Alexa' }
friends.delete('Bob')      // false: Set(4) { 'Christine', 'Lynn', 'Priscilla', 'Alexa' }


// has()
friends.has('Alexa')       // true
friends.has('Annie')       // false


// Spread operator
//[...friends]               // [ 'Christine', 'Lynn', 'Priscilla', 'Alexa' ]: the set is converted into an Array
Math.max(...friends)       // NaN
friends.add(8)
friends.add(21)

Math.max(...friends);       // still NaN even though numbers were put in.
friends.delete('Christine')
friends.delete('Lynn')
friends.delete('Priscilla')
friends.delete('Alexa')
friends                     // only integers remain: Set(2) { 8, 21 }
Math.max(...friends)       // 21; not we see that it is 21!


// When the set is: Set(2) { 8, 21 }
let productA = 1;
friends.forEach(n => { productA *= n; });   // 168


// clear()
const newFriends = new Set(['Amy', 'Carmen', 'Christine', "Lynn", 'Priscilla', 'Shawn']);
newFriends           // Set(6) { 'Amy', 'Carmen', 'Christine', 'Lynn', 'Priscilla', 'Shawn' }
newFriends.clear();   // undefined
newFriends.size       // 0

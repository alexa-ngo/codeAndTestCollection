// Stack Class

// Purpose: The Stack Class is based on an array data structure. The stack implements the concept of the "last in, first out" (LIFO) method. 
//          We would use the push() and pop() methods to add and remove elements from the stack, respectively.
//          We can only access the items on the top of the stack. This means if we want to get an element in the middle of the stack we have to use the pop() method
//          to remove all the elements on top of the element we want before accessing it.

// Methods: 
//      - The push() method appends one or more new elements to the top of the Stack and returns the new length of the Stack.
//      - The pop() method pops off the last element of the stack, decrements the length, and returns the value that removes it.
//      - The top() method returns the value stored at the top of the stack.
//      - The isEmpty() method returns a boolean.
//      - The currIndex() method returns the position of the pointer.

// Preconditions: We can input an object or an integer into the stack.
// Postconditions: returns the stack or the response to the method.
// Receives/inputs: We need to input an element for the push() method. The elements push(), pop(), top(), isEmpty(), and currIndex() does not need an argument.
// Returns/outputs:

// Application: 
//      - "most recently used" features such as files, items, tools, recently closed tabls
//      - code editor to see if we have closed all our parentheses properly
//      - undo/redo function and forward/back button



class Stack {

    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    top() {
        const topOfStack = this.items.length;
        return `The top of the stack has the value of ${this.items[topOfStack - 1]}.`;
    }

    isEmpty() {
        if (this.items.length === 0) {
            return "The stack is empty.";
        } else {
            const remainingItems = this.items.length;
            return `The stack is not empty and still has ${remainingItems} item(s) in it."`;
        }
    }

    currIndex() {
        return this.items.length;
    }
};

// theStack = new Stack();
// theHolder = new Stack();
// theStack.push(1);
// theStack.push(2);
// theStack.push(3);
// theStack.push(4);

// const z = theStack;
// console.log(z);

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// array1.push(...array2)
// console.log('The holder', array1)
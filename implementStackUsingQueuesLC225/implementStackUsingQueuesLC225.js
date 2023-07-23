export class Stack {

    constructor() {
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    }

    push(item) {
        return this.queue1.enqueue(item);
    }

    pop() {
        return this.queue1.dequeue();
    }

    empty() {
        return (this.queue1.isEmpty() && this.queue2.isEmpty())
    }

    top() {
        while (!this.queue1.isEmpty()) {
            const currItem = this.queue1.dequeue();
            this.queue2.enqueue(currItem);
        }
        const temp = this.queue2.dequeue();
        this.queue2.enqueue(temp);
        return temp;
    }
};


export class Queue {

    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        const workingItem = this.items.shift();
        return workingItem;
    }

    isEmpty() {
        return this.items.length === 0;
    }
};



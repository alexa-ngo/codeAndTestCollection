class Stack {

    constructor() {
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    }

    fixIt() {
        while (!this.queue1.isEmpty()) {
            const currItem = this.queue1.dequeue();
            this.queue2.enqueue(currItem)
        }
        while (!this.queue2.isEmpty()) {
            const currItem2 = this.queue2.dequeue();
            this.queue1.enqueue(currItem2)
        }
    }

    push(item) {
        this.fixIt();
        this.queue1.enqueue(item);
    }

    empty() {
        return (this.queue1.isEmpty() && this.queue2.isEmpty());
    }

    // We are peeking at the top of the stack and returning that number back.
    top() {
        const currTop = this.pop();
        this.queue2.enqueue(currTop);
        return currTop;
    }

    pop() {
        this.fixIt();
        while (!this.queue1.isEmpty()) {
            const currItem = this.queue1.dequeue();
            this.queue2.enqueue(currItem);
        }
        const temp = this.queue2.dequeue();
        return temp;
    }
}


class Queue {

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
}






export class Stack {

    constructor() {
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    }

    fixIt() {
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


    top() {
        const currTop = this.pop();
        this.queue1.enqueue(currTop);
        return currTop;
    }

    // The pop is wrong

    pop() {
        this.fixIt();
        let result = 0;
        while (!this.queue1.isEmpty()) {
            result = this.queue1.dequeue();
            if (this.queue1.isEmpty()) {
                break;
            }
            this.queue2.enqueue(result)
        }
        return result;
    }
}

// def pop(self) -> int:
// self._fix()
// result = 0

// while not self._q1.is_empty():
//     result = self._q1.dequeue()
//     if self._q1.is_empty():
//         break

//     self._q2.enqueue(result)

// return result        

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
}





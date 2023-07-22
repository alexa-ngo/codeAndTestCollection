import { Queue, Stack } from "./implementStackUsingQueuesLC225rev1";

it("enqueue 3 items to the queue.", () => {
    const workingQueue = new Queue();
    workingQueue.enqueue(1);
    workingQueue.enqueue(2);
    workingQueue.enqueue(3);
    expect(workingQueue).toEqual({ "items": [1, 2, 3] })
})

it("enqueue 2 items to the queue.", () => {
    const workingQueue = new Queue();
    workingQueue.enqueue(5);
    workingQueue.enqueue(110);
    expect(workingQueue).toEqual({ "items": [5, 110] })
})

it('dequeue 2 items from a queue of 5 items', () => {
    const workingQueue = new Queue();
    workingQueue.enqueue(50);
    workingQueue.enqueue(10);
    workingQueue.enqueue(15);
    workingQueue.enqueue(20);
    workingQueue.enqueue(25);
    workingQueue.dequeue();
    workingQueue.dequeue();
    expect(workingQueue).toEqual({ "items": [15, 20, 25] })
})

it('dequeue all 5 items from a queue of 5 items', () => {
    const workingQueue = new Queue();
    workingQueue.enqueue(50);
    workingQueue.enqueue(10);
    workingQueue.enqueue(15);
    workingQueue.enqueue(20);
    workingQueue.enqueue(25);
    workingQueue.dequeue();
    workingQueue.dequeue();
    workingQueue.dequeue();
    workingQueue.dequeue();
    workingQueue.dequeue();
    expect(workingQueue).toEqual({ "items": [] })
})

it('dequeue 4 items from a queue of 5 items', () => {
    const workingQueue = new Queue();
    workingQueue.enqueue(5);
    workingQueue.enqueue(11);
    workingQueue.enqueue(123);
    workingQueue.enqueue(32321);
    workingQueue.enqueue(2321321);
    workingQueue.dequeue();
    workingQueue.dequeue();
    workingQueue.dequeue();
    workingQueue.dequeue();
    expect(workingQueue).toEqual({ "items": [2321321] })
})

it('returns true if the queue is empty', () => {
    const workingQueue = new Queue();
    workingQueue.enqueue(5);
    workingQueue.enqueue(11);
    workingQueue.enqueue(123);
    workingQueue.enqueue(32321);
    workingQueue.dequeue();
    workingQueue.dequeue();
    workingQueue.dequeue();
    workingQueue.dequeue();
    const result = workingQueue.isEmpty();
    expect(result).toEqual(true)
})

it('returns false if the queue is not empty', () => {
    const workingQueue = new Queue();
    workingQueue.enqueue(5);
    workingQueue.enqueue(11);
    workingQueue.enqueue(123);
    workingQueue.enqueue(32321);
    workingQueue.dequeue();
    workingQueue.dequeue();
    const result = workingQueue.isEmpty();
    expect(result).toEqual(false)
})



it('Push 5,6,7 to queue1 when there are 2 existing items', () => {
    const workingStack = new Stack();
    workingStack.push(5);
    workingStack.push(6);
    workingStack.push(7);
    expect(workingStack).toEqual({ "queue1": { "items": [5, 6, 7] }, "queue2": { "items": [] } })
})


it('Push 20, 301, 431 to queue1 when there are no existing items', () => {
    const workingStack = new Stack();
    workingStack.push(20);
    workingStack.push(301);
    workingStack.push(431);
    expect(workingStack).toEqual({ "queue1": { "items": [20, 301, 431] }, "queue2": { "items": [] } })
})

it('Pop all of 5 items from the existing queue with 5 items', () => {
    const workingStack = new Stack();
    workingStack.push(20);
    workingStack.push(301);
    workingStack.push(431);
    workingStack.push(76);
    workingStack.push(98);
    const result = workingStack.pop();
    expect(result).toEqual(98)
})


it('Pop 3 items from the existing queue with 7 items', () => {
    const workingStack = new Stack();
    workingStack.push(1);
    workingStack.push(2);
    workingStack.push(3);
    workingStack.push(4);
    workingStack.push(5);
    workingStack.push(6);
    workingStack.push(7);
    workingStack.pop();
    workingStack.pop();
    workingStack.pop();
    const result = workingStack.pop();
    expect(result).toEqual(4)
})

it('Push 3 times', () => {
    const workingStack = new Stack();
    workingStack.push(1);
    workingStack.push(2);
    workingStack.push(3);
    expect(workingStack).toEqual({ "queue1": { "items": [1, 2, 3] }, "queue2": { "items": [] } })
})

it('Push 3 times, pop 1 times', () => {
    const workingStack = new Stack();
    workingStack.push(1);
    workingStack.push(2);
    workingStack.push(3);
    const result = workingStack.pop();
    expect(result).toEqual(3)
})

it('Push 3 times, pop 1 times, push 2 more times', () => {
    const workingStack = new Stack();
    workingStack.push(1);
    workingStack.push(2);
    workingStack.push(3);
    workingStack.pop();
    workingStack.pop();
    workingStack.push(4);
    workingStack.push(5);
    const result = workingStack.pop();
    expect(result).toEqual(5)
})


it('Push 3 times, pop 2 times, push 2 more times', () => {
    const workingStack = new Stack();
    workingStack.push(1);
    workingStack.push(2);
    workingStack.push(3);
    workingStack.pop();
    workingStack.pop();
    workingStack.push(4);
    workingStack.push(5);
    const result = workingStack.pop();
    expect(result).toEqual(5)
})


it('Push 3 times, pop 2 times, push 2 more times', () => {
    const workingStack = new Stack();
    workingStack.push(1);
    workingStack.push(2);
    workingStack.push(3);
    const first = workingStack.pop();
    expect(first).toEqual(3);
    workingStack.pop();
    workingStack.push(4);
    workingStack.push(5);
    const result = workingStack.pop()
    expect(result).toEqual(5)
})

it('Push 2 times, pop 1 time, push 1 more time', () => {
    const workingStack = new Stack();
    workingStack.push(1);
    workingStack.push(2);
    workingStack.pop();
    workingStack.push(3);
    const result = workingStack.pop();
    expect(result).toEqual(3)
})

it('Return true when the queue is empty', () => {
    const workingStack = new Stack();
    workingStack.push(1);
    workingStack.push(3);
    workingStack.push(6);
    workingStack.pop();
    workingStack.pop();
    workingStack.pop();
    const result = workingStack.empty();
    expect(result).toEqual(true)
})

it('Return false when the queue is empty', () => {
    const workingStack = new Stack();
    workingStack.push(1);
    workingStack.push(3);
    workingStack.push(6);
    workingStack.pop();
    workingStack.pop();
    const result = workingStack.empty();
    expect(result).toEqual(false)
})

it('Return 5 in when the queue is 5,7,8,9', () => {
    const workingStack = new Stack();
    workingStack.push(20);
    workingStack.push(301);
    workingStack.push(431);
    workingStack.push(76);
    workingStack.push(1);
    const result = workingStack.top();
    expect(result).toEqual(1);
})



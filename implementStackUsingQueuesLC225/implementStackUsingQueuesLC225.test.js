import { Stack, Queue } from "./implementStackUsingQueuesLC225";


it('Dequeue three numbers from 1,2,3,4,5 to result in 4,5', () => {
    const myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.enqueue(4);
    myQueue.enqueue(5);
    myQueue.dequeue();
    expect(myQueue).toEqual({ "items": [2, 3, 4, 5] });
})

it('Test empty queue', () => {
    const myQueue = new Queue();
    expect(myQueue).toEqual({ "items": [] });
})

it('Test queue with using 1,2,3,4,5', () => {
    const myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.enqueue(4);
    myQueue.enqueue(5);
    expect(myQueue).toEqual({ "items": [1, 2, 3, 4, 5] });
})

it('Dequeue three numbers from 1,2,3,4,5 to result in 4,5', () => {
    const myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.enqueue(4);
    myQueue.enqueue(5);
    myQueue.dequeue();
    myQueue.dequeue();
    myQueue.dequeue();
    expect(myQueue).toEqual({ "items": [4, 5] });
})

it('Dequeue two numbers from 1,2,3 and returns 2', () => {
    const myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.enqueue(4);
    myQueue.enqueue(5);
    myQueue.dequeue();
    myQueue.dequeue();
    const result = myQueue.dequeue();
    expect(result).toEqual(3);
})
it('Dequeue all the numbers from 1,2,3', () => {
    const myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.dequeue();
    myQueue.dequeue();
    myQueue.dequeue();
    expect(myQueue).toEqual({ "items": [] });
})

it('Returns true when the queue is empty. The five numbers are enqueue and then dequeued', () => {
    const myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.enqueue(4);
    myQueue.enqueue(5);
    myQueue.dequeue();
    myQueue.dequeue();
    myQueue.dequeue();
    myQueue.dequeue();
    myQueue.dequeue();
    const result = myQueue.isEmpty();
    expect(result).toEqual(true);
})

it('Returns false when the queue is not empty. The five values are dequeued', () => {
    const myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.enqueue(4);
    myQueue.enqueue(5);
    myQueue.dequeue();
    myQueue.dequeue();
    myQueue.dequeue();
    const result = myQueue.isEmpty();
    expect(result).toEqual(false);
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
    workingStack.pop();
    workingStack.pop();
    workingStack.pop();
    workingStack.pop();
    workingStack.pop();
    expect(workingStack).toEqual({ "queue1": { "items": [] }, "queue2": { "items": [] } })
})


it('Pop 3 items from the existing queue with 7 items', () => {
    const workingStack = new Stack();
    workingStack.push(20);
    workingStack.push(301);
    workingStack.push(431);
    workingStack.push(76);
    workingStack.push(1);
    workingStack.push(3);
    workingStack.push(6);
    workingStack.pop();
    workingStack.pop();
    workingStack.pop();
    console.log(workingStack)
    expect(workingStack).toEqual()
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
    expect(result).toEqual(20);
})


import { Queue } from "./implementStackUsingQueuesLC225";

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

it('Returns the size of the queue when there are two values', () => {
    const myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.enqueue(4);
    myQueue.enqueue(5);
    myQueue.dequeue();
    myQueue.dequeue();
    myQueue.dequeue();
    const result = myQueue.size();
    expect(result).toEqual(2);
})


it('Returns the size of the queue when there are two values', () => {
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
    const result = myQueue.size();
    expect(result).toEqual(0);
})
// const myQueue = new Queue();
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// myQueue.enqueue(4);
// myQueue.enqueue(5);
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();

// const sizeIt = myQueue.size();
// const seeIt = myQueue.peek();
// const isItEmpty = myQueue.isEmpty();
// console.log(isItEmpty);
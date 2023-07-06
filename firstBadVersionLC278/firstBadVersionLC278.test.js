import { firstBadVersion } from "./firstBadVersionLC278";

it('Returns the first occurance of 1 when the input is 1', () => {
    const n = 1;
    const result = firstBadVersion(n);
    expect(result).toBe(1);
})

it('Returns the first occurance of 1 when the input is 2', () => {
    const n = 2;
    const result = firstBadVersion(n);
    expect(result).toBe(1);
});

it('Returns the first occurance of 3 when the input is 5', () => {
    const n = 5;
    const result = firstBadVersion(n);
    expect(result).toBe(3);
});


it('Returns the first occurance of 27 when the input is 50', () => {
    const n = 29;
    const result = firstBadVersion(n);
    expect(result).toBe(27);
})

it('Returns the first occurance of 59 when the input is 150', () => {
    const n = 150;
    const result = firstBadVersion(n);
    expect(result).toBe(148);
})
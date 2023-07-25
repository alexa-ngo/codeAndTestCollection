import { singleNum } from "./singleNumberLCRev1";

it('Returns 1 from num = [2,2,1]', () => {
    const num = [2, 2, 1]
    const result = singleNum(num);
    expect(result).toBe(1);
});

it('Returns 2 from num = [1,1,2]', () => {
    const num = [1, 1, 2]
    const result = singleNum(num);
    expect(result).toBe(2);
});

it('Returns 4 from num = [2,2,1,1,4]', () => {
    const num = [2, 2, 1, 1, 4]
    const result = singleNum(num);
    expect(result).toBe(4);
});


it('Returns 5 from num = [1,1,4,4,5] ', () => {
    const num = [1, 1, 4, 4, 5]
    const result = singleNum(num);
    expect(result).toBe(5);
});

it('Returns 4 from num = [1,2,2,1,3,3,4]', () => {
    const num = [1, 2, 2, 1, 3, 3, 4]
    const result = singleNum(num);
    expect(result).toBe(4);
});

it('Returns 4 from num = [13,33,13,4,33]', () => {
    const num = [13, 33, 13, 4, 33]
    const result = singleNum(num);
    expect(result).toBe(4);
});

it('Returns 2 from num = [11,1,11,1,2]', () => {
    const num = [11, 1, 11, 1, 2]
    const result = singleNum(num);
    expect(result).toBe(2);
});

it('Returns -1 from num = [14,14,1,1,0,0,-1]', () => {
    const num = [14, 14, 1, 1, 0, 0, -1]
    const result = singleNum(num);
    expect(result).toBe(-1);
});

it('Returns 4 from num = [3333,3333,1,1,0,0,-11,-11,4]', () => {
    const num = [3333, 3333, 1, 1, 0, 0, -11, -11, 4]
    const result = singleNum(num);
    expect(result).toBe(4);
});


import { singleNumber } from "./singleNumberLC136";

it('returns 2 when num = [2]', () => {
    const num = [2];
    const result = singleNumber(num);
    expect(result).toEqual([2]);
})

it('returns 1 when num = [5, 3, 3, 1, 5]', () => {
    const num = [5, 3, 3, 1, 5];
    const result = singleNumber(num);
    expect(result).toBe(1)
})

it('returns 2 when num = [1, 5, 5, 1, 2]', () => {
    const num = [1, 5, 5, 1, 2];
    const result = singleNumber(num);
    expect(result).toBe(2)
})

it('returns 17 when num = [9, 1, 3, 17, 3, 1, 2, 2, 9]', () => {
    const num = [9, 1, 3, 17, 3, 1, 2, 2, 9];
    const result = singleNumber(num);
    expect(result).toBe(17)
})

it('returns 123 when num = [88, 19, 123, 19, 88]', () => {
    const num = [88, 19, 123, 19, 88];
    const result = singleNumber(num);
    expect(result).toBe(123)
})

it('returns -999999 when num = [30400, 120000]', () => {
    const num = [30400, 120000];
    const result = singleNumber(num);
    expect(result).toBe(-9999999)
})

it('returns -9999999 when num = [1, 5, 5, 1]', () => {
    const num = [1, 5, 5, 1];
    const result = singleNumber(num);
    expect(result).toBe(-9999999)
})


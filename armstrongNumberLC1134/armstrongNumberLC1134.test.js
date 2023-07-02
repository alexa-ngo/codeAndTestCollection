import { armstrongNumber } from "./armstrongNumberLC1134";

it('Returns true when num is 1', () => {
    const num = 1;
    const result = armstrongNumber(num);
    expect(result).toBe(true);
})

it('Returns true when num is 153', () => {
    const num = 153;
    const result = armstrongNumber(num);
    expect(result).toBe(true);
})

it('Returns true when num is 370', () => {
    const num = 370;
    const result = armstrongNumber(num);
    expect(result).toBe(true);
})

it('Returns true when num is 371', () => {
    const num = 371;
    const result = armstrongNumber(num);
    expect(result).toBe(true);
})

it('Returns true when num is 407', () => {
    const num = 407;
    const result = armstrongNumber(num);
    expect(result).toBe(true);
})

it('Returns false when num is 100', () => {
    const num = 100;
    const result = armstrongNumber(num);
    expect(result).toBe(false);
})

it('Returns false when num is 123', () => {
    const num = 123;
    const result = armstrongNumber(num);
    expect(result).toBe(false);
})

it('Returns false when num is 408', () => {
    const num = 408;
    const result = armstrongNumber(num);
    expect(result).toBe(false);
})

it('Returns false when num is 1239', () => {
    const num = 1239;
    const result = armstrongNumber(num);
    expect(result).toBe(false);
})

it('Returns false when num is 25672', () => {
    const num = 25672;
    const result = armstrongNumber(num);
    expect(result).toBe(false);
})
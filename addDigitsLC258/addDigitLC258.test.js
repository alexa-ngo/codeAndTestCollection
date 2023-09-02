import { addDigit } from "./addDigitLC258";

it('Returns 0 when num = 0', () => {
    const nums = 0;
    const result = addDigit(nums);
    expect(result).toBe(0);
})

it('Returns 2 when num = 38', () => {
    const nums = 38;
    const result = addDigit(nums);
    expect(result).toBe(2);
})

it('Returns 2 when num = 12332', () => {
    const nums = 12332;
    const result = addDigit(nums);
    expect(result).toBe(2);
})

it('Returns 6 when num = 542535', () => {
    const nums = 542535;
    const result = addDigit(nums);
    expect(result).toBe(6);
})

it('Returns 2 when num = 54353432', () => {
    const nums = 54353432;
    const result = addDigit(nums);
    expect(result).toBe(2);
})
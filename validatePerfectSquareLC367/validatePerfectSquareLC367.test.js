import { validatePerfectSquare } from "./validatePerfectSquareLC367";

it('Returns true when num = 0', () => {
    const result = validatePerfectSquare(0);
    expect(result).toBe(true);
})

it('Returns true when num = 1', () => {
    const result = validatePerfectSquare(1);
    expect(result).toBe(true);
})

it('Returns true when num = 4', () => {
    const result = validatePerfectSquare(4);
    expect(result).toBe(true);
})

it('Returns true when num = 9', () => {
    const result = validatePerfectSquare(9);
    expect(result).toBe(true);
})

it('Returns true when num = 1,048,576', () => {
    const result = validatePerfectSquare(1048576);
    expect(result).toBe(true);
})

it('Returns true when num = 1,073,741,824', () => {
    const result = validatePerfectSquare(1073741824);
    expect(result).toBe(true);
})

it('Returns false when num = 15', () => {
    const result = validatePerfectSquare(15);
    expect(result).toBe(false);
})

it('Returns false when num = 20', () => {
    const result = validatePerfectSquare(20);
    expect(result).toBe(false);
})

it('Returns false when num = (2**31)-1', () => {
    const result = validatePerfectSquare(2147483647);
    expect(result).toBe(false);
})
it('Returns false when num = 1,290,948', () => {
    const result = validatePerfectSquare(1290948);
    expect(result).toBe(false);
})

it('Returns false when num = 1,034,329,119', () => {
    const result = validatePerfectSquare(1034329119);
    expect(result).toBe(false);
})

it('Returns false when num = 2,047,483,688', () => {
    const result = validatePerfectSquare(2047483688);
    expect(result).toBe(false);
})

it('Returns false when num = 2,147,483,648', () => {
    const result = validatePerfectSquare(2147483648);
    expect(result).toBe(false);
})



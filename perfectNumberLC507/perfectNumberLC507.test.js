import { perfectNum } from "./perfectNumberLC507";

it('Returns true when num = 6', () => {
    const num = 6;
    const result = perfectNum(num)
    expect(result).toBe(true)
})

it('Returns true when num = 28', () => {
    const num = 28;
    const result = perfectNum(num)
    expect(result).toBe(true)
})

it('Returns true when num = 496', () => {
    const num = 496;
    const result = perfectNum(num)
    expect(result).toBe(true)
})

it('Returns true when num = 8128', () => {
    const num = 8128;
    const result = perfectNum(num)
    expect(result).toBe(true)
})

it('Returns false when num = 7', () => {
    const num = 7;
    const result = perfectNum(num)
    expect(result).toBe(false)
})

it('Returns false when num = 123127', () => {
    const num = 123127;
    const result = perfectNum(num)
    expect(result).toBe(false)
})

it('Returns false when num = 434237', () => {
    const num = 434237;
    const result = perfectNum(num)
    expect(result).toBe(false)
})

it('Returns false when num = 7000342', () => {
    const num = 7000342;
    const result = perfectNum(num)
    expect(result).toBe(false)
})

import { romanToInteger } from "./romanToInteger";

it("'III' returns 3 as the result.", () => {
    const romanNum = "III";
    const result = romanToInteger(romanNum);
    expect(result).toBe(3);
})

it("'MCMXCIV' returns 1994 as the result.", () => {
    const romanNum = "MCMXCIV";
    const result = romanToInteger(romanNum);
    expect(result).toBe(1994);
})

it("An empty string returns '' as the result.", () => {
    const romanNum = "";
    const result = romanToInteger(romanNum);
    expect(result).toBe("");
})

it("'X' returns 10 as the result.", () => {
    const romanNum = "X";
    const result = romanToInteger(romanNum);
    expect(result).toBe(10);
})

it("'XXXIX' returns 39 as the result.", () => {
    const romanNum = "XXXIX";
    const result = romanToInteger(romanNum);
    expect(result).toBe(39);
})

it("'MIX' returns 1,009 as the result.", () => {
    const romanNum = "MIX";
    const result = romanToInteger(romanNum);
    expect(result).toBe(1009);
})

it("'MDCCLXXVI' returns 1776.", () => {
    const romanNum = "MDCCLXXVI";
    const result = romanToInteger(romanNum);
    expect(result).toBe(1776);
})

it("'MMXXIII' returns 2,023 as the result.", () => {
    const romanNum = "MMXXIII";
    const result = romanToInteger(romanNum);
    expect(result).toBe(2023);
})

it("'MMXCDXXI' returns 2,421 as the result.", () => {
    const romanNum = "MMCDXXI";
    const result = romanToInteger(romanNum);
    expect(result).toBe(2421);
})

it("The default returns 0.", () => {
    const romanNum = 'Oh, no! There is an error';
    const result = romanToInteger(romanNum);
    expect(result).toBe(0);
})



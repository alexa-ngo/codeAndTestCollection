import { wordPattern } from "./wordPatternLC290";

it('Returns "" when pattern = "" and s = ""', () => {
    const pattern = "";
    const s = ""
    const result = wordPattern(pattern, s);
    expect(result).toBe(false);
})

it('Returns true when pattern = "aaa" and s = "cat cat cat"', () => {
    const pattern = "aaa";
    const s = "cat cat cat";
    const result = wordPattern(pattern, s);
    expect(result).toBe(true);
})

it('Returns false when pattern = "abbabb" and s = "dog monkey cat dog dog dog"', () => {
    const pattern = "abbabb";
    const s = "dog monkey cat dog dog dog"
    const result = wordPattern(pattern, s);
    expect(result).toBe(false);
})

it('Returns true when pattern = "abba" and s = "dog cat cat dog"', () => {
    const pattern = "abba";
    const s = "dog cat cat dog"
    const result = wordPattern(pattern, s);
    expect(result).toBe(true);
})

it('Returns false when pattern = "abba" and s = "dog cat rat dog"', () => {
    const pattern = "abba";
    const s = "dog cat rat dog"
    const result = wordPattern(pattern, s);
    expect(result).toBe(false);
})

it('Returns false when pattern = "abba" and s = "dog dog dog dog"', () => {
    const pattern = "abba";
    const s = "dog dog dog dog"
    const result = wordPattern(pattern, s);
    expect(result).toBe(false);
})

it('Returns true when pattern = "abaa" and s = "dog cat dog dog"', () => {
    const pattern = "abaa";
    const s = "dog cat dog dog"
    const result = wordPattern(pattern, s);
    expect(result).toBe(true);
})
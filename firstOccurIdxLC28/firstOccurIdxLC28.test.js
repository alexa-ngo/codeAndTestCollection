import { firstIdx } from "./firstOccurIdxLC28";

it("if the needle is empty, we return -1.", () => {
    const haystack = "hello friend!";
    const needle = ""
    const result = firstIdx(haystack, needle);
    expect(result).toBe(-1);
})

it("if the needle is 'puppy' and the haystack is 'pupp', we return -1 because the needle is out of range.", () => {
    const haystack = 'pupp'
    const needle = 'puppy'
    const result = firstIdx(haystack, needle);
    expect(result).toBe(-1);
})

it("if the needle is 'dog' and the haystack is 'thedo', we return -1 because the needle is out of range.", () => {
    const haystack = 'thedo'
    const needle = 'dog'
    const result = firstIdx(haystack, needle);
    expect(result).toBe(-1);
})

it("if haystack = 'sadbutsad', needle = 'sad'. 'sad' occurs at index 0 and 6, we return 0.", () => {
    const haystack = 'sadbutsad'
    const needle = 'sad'
    const result = firstIdx(haystack, needle);
    expect(result).toBe(0);
})

it("'leeto' did not occur in 'leetcode', so we return -1.", () => {
    const haystack = 'leetcode'
    const needle = 'leeto'
    const result = firstIdx(haystack, needle);
    expect(result).toBe(-1);
})

it("'at' occurs at index 0 in 'atatattat', so we return 0.", () => {
    const haystack = 'atatattat'
    const needle = 'at'
    const result = firstIdx(haystack, needle);
    expect(result).toBe(0);
})

it("'at' occurs at index 2 in 'ttatattat', so we return 2.", () => {
    const haystack = 'ttatattat'
    const needle = 'at'
    const result = firstIdx(haystack, needle);
    expect(result).toBe(2);
})

it("'at' occurs at index 5 in 'ttatattat', so we return 5.", () => {
    const haystack = 'aaaaaatat'
    const needle = 'at'
    const result = firstIdx(haystack, needle);
    expect(result).toBe(5);
})

import { findDiff } from "./findTheDifferenceLC389";

it('s = "", t = "y" returns "y"', () => {
    const s = ""
    const t = "y"
    const result = findDiff(s, t)
    expect(result).toBe("y");
})

it('s = "abcd", t = "abcde" returns "e"', () => {
    const s = "abcd"
    const t = "abcde"
    const result = findDiff(s, t)
    expect(result).toBe("e");
})

it('s = "aaaa", t = "aaaaa" returns "a"', () => {
    const s = "aaaa"
    const t = "aaaaa"
    const result = findDiff(s, t)
    expect(result).toBe("a");
})

it('s = "sunnydays", t = "ssunnydays" returns "s"', () => {
    const s = "sunnydays"
    const t = "ssunnydays"
    const result = findDiff(s, t)
    expect(result).toBe("s");
})

it('s = "sunnydays", t = "sunnyydays" returns "y"', () => {
    const s = "sunnydays"
    const t = "sunnyydays"
    const result = findDiff(s, t)
    expect(result).toBe("y");
})

it('s = "sunnydays", t = "sunnydaysz" returns "z"', () => {
    const s = "sunnydays"
    const t = "sunnydaysz"
    const result = findDiff(s, t)
    expect(result).toBe("z");
})
import { jewelsAndStones } from "./jewelsAndStonesLC771"

it('Returns 0 when jewels = "abcABC", stones = "z"', () => {
    const jewels = "abcABC"
    const stones = "z"
    const result = jewelsAndStones(jewels, stones)
    expect(result).toBe(0)
});

it('Returns 2 when jewels = "z", stones = "Zzz"', () => {
    const jewels = "z"
    const stones = "Zzz"
    const result = jewelsAndStones(jewels, stones)
    expect(result).toBe(2)
});

it('Returns 3 when jewels = "aA", stones = "aAAbbbb"', () => {
    const jewels = "aA"
    const stones = "aAAbbbb"
    const result = jewelsAndStones(jewels, stones)
    expect(result).toBe(3)
});

it('Returns 2 when jewels = "zZ", stones = "zZ"', () => {
    const jewels = "zZ"
    const stones = "zZ"
    const result = jewelsAndStones(jewels, stones)
    expect(result).toBe(2)
});

it('Returns 3 when jewels = "abc", stones = "AaBbCc"', () => {
    const jewels = "abc"
    const stones = "AaBbCc"
    const result = jewelsAndStones(jewels, stones)
    expect(result).toBe(3)
});

it('Returns 3 when jewels = "king", stones = "kingAndQueen"', () => {
    const jewels = "king"
    const stones = "kingAndQueen"
    const result = jewelsAndStones(jewels, stones)
    expect(result).toBe(6)
});














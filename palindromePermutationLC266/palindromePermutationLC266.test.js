import { permutePalindrome } from "./palindromePermutationLC266";

it('"code" returns false', () => {
    const s = "code"
    const result = permutePalindrome(s)
    expect(result).toBe(false)
})

it('"cat" returns false', () => {
    const s = "cat"
    const result = permutePalindrome(s)
    expect(result).toBe(false)
})

it('"aab" returns false', () => {
    const s = "aab"
    const result = permutePalindrome(s)
    expect(result).toBe(true)
})

it('"carerac" returns true', () => {
    const s = "carerac"
    const result = permutePalindrome(s)
    expect(result).toBe(true)
})

it('"baa" returns true', () => {
    const s = "baa"
    const result = permutePalindrome(s)
    expect(result).toBe(true)
})

it('"racecar" returns true', () => {
    const s = "racecar"
    const result = permutePalindrome(s)
    expect(result).toBe(true)
})

it('"windmillmillwind" returns true', () => {
    const s = "windmillmillwind"
    const result = permutePalindrome(s)
    expect(result).toBe(true)
})
it('"ssunnus" returns true', () => {
    const s = "ssunnus"
    const result = permutePalindrome(s)
    expect(result).toBe(true)
})


import { validateAnagram } from "./validateAnagramLC242";

it('There are no values in both inputs. Return false.', () => {
    const s = "";
    const t = "";
    const result = validateAnagram(s, t);
    expect(result).toEqual(false);
})

it('Both strings are anagrams of each other.', () => {
    const s = "anagram";
    const t = "nagaram";
    const result = validateAnagram(s, t);
    expect(result).toEqual(true);
})

it('Returns false when the length of s is not equal to the length of t.', () => {
    const s = "rats";
    const t = "car";
    const result = validateAnagram(s, t);
    expect(result).toEqual(false);
})

it('Returns false when the lengths are equal but one character is different in bats and cats.', () => {
    const s = "bats";
    const t = "cats";
    const result = validateAnagram(s, t);
    expect(result).toEqual(false);
})

it('Cats and Catt returns false.', () => {
    const s = "Cats";
    const t = "Catt";
    const result = validateAnagram(s, t);
    expect(result).toEqual(false);
})

it('Cat and cat returns false.', () => {
    const s = "Cat";
    const t = "cat";
    const result = validateAnagram(s, t);
    expect(result).toEqual(false);
})




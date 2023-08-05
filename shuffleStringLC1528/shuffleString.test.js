import { shuffleString } from "./shuffleString";

it('s = "cat", indices = [2,0,1] returns "atc"', () => {
    const s = "cat"
    const indices = [2, 0, 1]
    const result = shuffleString(s, indices)
    expect(result).toBe("atc")
});

it('s = "alexa", indices = [1,2,3,4,0] returns "aalex"', () => {
    const s = "alexa"
    const indices = [1, 2, 3, 4, 0]
    const result = shuffleString(s, indices)
    expect(result).toBe("aalex")
});

it('s = "codeleet", indices = [4,5,6,7,0,2,1,3] returns "leetcode"', () => {
    const s = "codeleet"
    const indices = [4, 5, 6, 7, 0, 2, 1, 3]
    const result = shuffleString(s, indices)
    expect(result).toBe("leetcode")
});

it('s = "great", indices = [1,0,2,3,4] returns "rgeat"', () => {
    const s = "great"
    const indices = [1, 0, 2, 3, 4]
    const result = shuffleString(s, indices)
    expect(result).toBe("rgeat")
});

it('s = "flying", indices = [3,4,5,0,1,2] returns "ingfly"', () => {
    const s = "flying"
    const indices = [3, 4, 5, 0, 1, 2]
    const result = shuffleString(s, indices)
    expect(result).toBe("ingfly")
});

it('s = "smiles", indices = [1,0,3,2,4,5] returns "mslies"', () => {
    const s = "smiles"
    const indices = [1, 0, 3, 2, 4, 5]
    const result = shuffleString(s, indices)
    expect(result).toBe("mslies")
});


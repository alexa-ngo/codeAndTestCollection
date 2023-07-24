import { longestCommonPrefix } from "./longestCommonPrefixLC14";

it('["hello"] returns "hello" ', () => {
    const strs = ["hello"]
    const result = longestCommonPrefix(strs)
    expect(result).toBe("hello")
})

it('["flower", "gray", "kick"] returns "" ', () => {
    const strs = ["flower", "gray", "kick"]
    const result = longestCommonPrefix(strs)
    expect(result).toBe("")
})

it('["abe", "bear", "call"] returns "" ', () => {
    const strs = ["abe", "bear", "call"]
    const result = longestCommonPrefix(strs)
    expect(result).toBe("")
})

it('["smells", "small", "smooth"] returns "sm" ', () => {
    const strs = ["smells", "small", "smooth"]
    const result = longestCommonPrefix(strs)
    expect(result).toBe("sm")
})

it('["cat", "dog", "cattle"] returns "" ', () => {
    const strs = ["cat", "dog", "cattle"]
    const result = longestCommonPrefix(strs)
    expect(result).toBe("")
})

it('["dinosaurs", "dino", "dig"] returns "di', () => {
    const strs = ["dinosaurs", "dino", "dig"]
    const result = longestCommonPrefix(strs)
    expect(result).toBe("di")
})

it('["fronting", "frontier", "froz"] returns "fro', () => {
    const strs = ["fronting", "frontier", "froz"]
    const result = longestCommonPrefix(strs)
    expect(result).toBe("fro")
})

it('["", "", ""] returns "" ', () => {
    const strs = ["", "", ""]
    const result = longestCommonPrefix(strs)
    expect(result).toBe("")
})

it('[undefined, undefined] returns "" ', () => {
    const strs = undefined
    const result = longestCommonPrefix(strs)
    expect(result).toBe("")
})



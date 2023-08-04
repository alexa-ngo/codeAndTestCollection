import { singleRowKeyboard } from "./singleRowKeyboard"

it('Returns 4 when keyboard = "abcdefghijklmnopqrstuvwxyz" and word = "cba"', () => {
    const keyboard = "abcdefghijklmnopqrstuvwxyz"
    const word = "cba"
    const result = singleRowKeyboard(keyboard, word)
    expect(result).toBe(4)
});

it('Returns 31 when keyboard = "sxyabcdetuvwrjklmnfzpqghio" and word = "alexa"', () => {
    const keyboard = "sxyabcdetuvwrjklmnfzpqghio"
    const word = "alexa"
    const result = singleRowKeyboard(keyboard, word)
    expect(result).toBe(31)
});

it('Returns 65 when keyboard = "tuvwrghbcdelijksxyamnfzpqo" and word = "flying"', () => {
    const keyboard = "tuvwrghbcdelijksxyamnfzpqo"
    const word = "flying"
    const result = singleRowKeyboard(keyboard, word)
    expect(result).toBe(65)
});

it('Returns 69 when keyboard = "otuvwxyabcdefzpqghijklmnrs" and word = "leetcode"', () => {
    const keyboard = "otuvwxyabcdefzpqghijklmnrs"
    const word = "leetcode"
    const result = singleRowKeyboard(keyboard, word)
    expect(result).toBe(69)
});

it('Returns 89 when keyboard = "dehbcnfzpsxyamtuvwrglijkqo" and word = "computers"', () => {
    const keyboard = "dehbcnfzpsxyamtuvwrglijkqo"
    const word = "computers"
    const result = singleRowKeyboard(keyboard, word)
    expect(result).toBe(89)
});

it('Returns 98 when keyboard = "ehfzpsxyaqomtuvbcnwrglijkd" and word = "performance"', () => {
    const keyboard = "ehfzpsxyaqomtuvbcnwrglijkd"
    const word = "performance"
    const result = singleRowKeyboard(keyboard, word)
    expect(result).toBe(98)
});







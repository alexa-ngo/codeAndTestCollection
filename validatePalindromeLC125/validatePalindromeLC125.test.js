import { validatePalindrome } from "./validatePalindromeLC125";

it("'toot' returns true ", () => {
    const result = validatePalindrome("toot");
    expect(result).toBe(true);
})

it("54145 returns true", () => {
    const result = validatePalindrome("54145");
    expect(result).toBe(true);
})

it("Two empty spaces returns true", () => {
    const result = validatePalindrome("  ");
    expect(result).toBe(true);
})

it("54!45 returns true", () => {
    const result = validatePalindrome("54!45");
    expect(result).toBe(true);
})

it("54!45$()$*# with random symbols returns true", () => {
    const result = validatePalindrome("54!45$()$*#");
    expect(result).toBe(true);
})

it("54!45 with a space at at the end returns true", () => {
    const result = validatePalindrome("54!45 ");
    expect(result).toBe(true);
})

it("Great day! returns false", () => {
    const result = validatePalindrome("Great day!");
    expect(result).toBe(false);
})

it("'Race a car' returns false", () => {
    const result = validatePalindrome("Race a car");
    expect(result).toBe(false);
})

it("`A man, a plan, a canal: Panama` returns true", () => {
    const result = validatePalindrome("A man, a plan, a canal: Panama");
    expect(result).toBe(true);
})

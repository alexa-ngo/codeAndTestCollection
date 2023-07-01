import { validateParentheses } from "./validateParentheses";

it("s = '' returns true", () => {
  const s = "";
  const result = validateParentheses(s);
  expect(result).toBe(false);
});

it("s = '(]' returns true", () => {
  const s = "(]";
  const result = validateParentheses(s);
  expect(result).toBe(false);
});

it("s = '{' returns false", () => {
  const s = "{";
  const result = validateParentheses(s);
  expect(result).toBe(false);
});

it("s = '([{}]' returns false", () => {
  const s = "([{}]";
  const result = validateParentheses(s);
  expect(result).toBe(false);
});

it("s = '([{}]))' returns false", () => {
  const s = "([{}]))";
  const result = validateParentheses(s);
  expect(result).toBe(false);
});

it("s = '[[()]]' returns true", () => {
  const s = "[[()]]";
  const result = validateParentheses(s);
  expect(result).toBe(true);
});

it("s = '()' returns true", () => {
  const s = "()";
  const result = validateParentheses(s);
  expect(result).toBe(true);
});

it("s = '[](){}' returns true", () => {
  const s = "[](){}";
  const result = validateParentheses(s);
  expect(result).toBe(true);
});

it("s = '[]{}' returns true", () => {
  const s = "[]{}";
  const result = validateParentheses(s);
  expect(result).toBe(true);
});

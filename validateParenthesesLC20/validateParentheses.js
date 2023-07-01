export function validateParentheses(s) {
  const t = s;
  const stack = [];

  if (t.length == 0 || t.length % 2 != 0) {
    return false;
  }

  const map = new Map();
  map.set(")", "(");
  map.set("}", "{");
  map.set("]", "[");

  for (let i = 0; i < t.length; i++) {
    const workingChar = s.charAt(i);
    if (workingChar === "(" || workingChar === "[" || workingChar === "{") {
      stack.push(workingChar);
    } else if (map.get(workingChar) === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}


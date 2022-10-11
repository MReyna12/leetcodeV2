function isValid(s) {
  // If string length is less than two, return false
  if (s.length < 2) return false;

  // Create a stack that will hold closed brackets
  let stack = [];

  // Create a brackets object that sets the keys as the open brackets and their values as the respective closing brackets
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  // Create a for loop that will check two things: 1. if character === open bracket, then add it's closing bracket to the stack; or 2. if character === closing bracket, then confirm that the last closing bracket added to the stack matches said charcter.
  // If it does not match, return false because that means the closing bracket is not in order. If it does match, then the bracket is removed from the stack and the loop continues.
  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];

    if (brackets[bracket]) {
      stack.push(brackets[bracket]);
    } else if (bracket !== stack.pop()) {
      return false;
    }
  }

  // If the stack is empty at the end of the loop, then return value is true.
  return stack.length === 0;
}

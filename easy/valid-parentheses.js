// P:
// R:
// E:
// P:

function isValid(s) {
  // Conditional that returns false if the length of the string is not even. Why? Because that means there are not enough characters to make pairs.
  if (s.length % 2 === 1) return false;

  // Create a stack (array) which will hold the respective closing characters
  let stack = [];
  // Create an object that holds the three parentheses pairs
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  // Create a for loop that will check each character of the string. If the character is an open bracket, then check brackets[character] and add its value (a closing bracket) to the stack. If the character is a closing bracket, then confirm the last character
  // added to the stack is the same type of closing bracket (because brackets must be closed in the correct order)
  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];

    if (brackets[bracket]) {
      stack.push(brackets[bracket]);
    } else if (bracket !== stack.pop()) {
      return false;
    }
  }

  return !stack.length;
}

isValid("()");

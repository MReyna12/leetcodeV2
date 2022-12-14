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

const isValid = (s) => {
  // If the string length is odd, then we know for sure that each bracket does not have a corresponding pair
  if (s.length % 2 === 1) return false;

  // Create hash to containing keys represented by open brackets and their corresponding values equal to the applicable closed brackets
  let brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let stack = [];

  // While looping through each character in the input string, check to see if it is an open bracket.
  // If an open bracket, then add its corresponding closed bracket to an array.
  // If a closed bracket, then check to see if the last bracket added to the array is equal to the current closed bracket, if not return false.
  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];

    if (brackets[currentBracket]) {
      stack.push(brackets[currentBracket]);
    } else if (stack.pop() !== currentBracket) {
      return false;
    }
  }

  // If the is a match for each open bracket, then the stack should be empty. If not empty, then there is at least one open bracket without a corresponding closed bracket.
  return stack.length === 0;
};

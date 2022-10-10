// P:
// R:
// E:
// P:

function isValid(s) {
  // If the input string is valid there must be an even number of characters (need to pair brackets together)
  // Conditional that checks if the input string length is even
  if (s.length % 2 === 1) return false;

  // Stack Method
  // Create a stack that will hold the corresponding closing bracket of each open bracket that appears in the loop
  let stack = [];

  // Create a bracket object that will determine which closing bracket goes into the stack
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  // For loop that checks each character of the string. If the character is an open bracket, then add its closing bracket to the stack. If the character is a closing bracket, confirm that the last closing bracket in the stack is the same as the character closing bracket.
  for (let i = 0; i < s.length; i++) {
    const character = s[i];

    // If open bracket, then add it's corresponding closing bracket to the stack array
    if (brackets[character]) {
      stack.push(brackets[character]);
    } else if (character !== stack.pop()) {
      // If closing bracket, then confirm the last bracket added to the stack is the same as the character (because brackets must be closed in order)
      return false;
    }
  }

  // If all brackets are closed in the correct order, then the stack should be empty due to stack.pop() removing them from the stack
  return stack.length === 0;
}

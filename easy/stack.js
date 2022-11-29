// Implement a stack - Last in Last Out

function Stack() {
  let collection = [];

  this.print = function () {
    console.log(collection);
  };

  // Add element to the end of the stack
  this.push = function (element) {
    collection.push(element);
  };

  // Remove the last element from the stack
  this.remove = function () {
    return collection.pop();
  };

  // Get the top element in the stack
  this.top = function () {
    return collection[collection.length - 1];
  };

  // Determine the size of the stack
  this.size = function () {
    return collection.length;
  };

  // Determine if the stack is empty
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

const testStack = new Stack();
testStack.push(1);
testStack.push(2);
testStack.push(3);
testStack.print();
console.log(testStack.remove());
console.log(testStack.top());

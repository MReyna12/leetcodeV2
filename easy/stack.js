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

// Implement queue using stacks
const MyQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

MyQueue.prototype.push = function (x) {
  this.inStack.push(x);
};

MyQueue.prototype.pop = function () {
  while (this.inStack.length !== 0) {
    this.outStack.push(this.inStack.pop());
  }

  const front = this.outStack.pop();

  while (this.outStack.length !== 0) {
    this.inStack.push(this.outStack.pop());
  }

  return front;
};

MyQueue.prototype.peek = function () {
  if (this.empty()) return "Nothing to peek, the stack is empty";

  while (this.inStack.length !== 0) {
    this.outStack.push(this.inStack.pop());
  }

  const front = this.outStack.pop();
  this.outStack.push(front);

  while (this.outStack.length !== 0) {
    this.inStack.push(this.outStack.pop());
  }

  return front;
};

MyQueue.prototype.empty = function () {
  return this.inStack.length === 0;
};

const obj = new MyQueue();
obj.push("x");
const param_2 = obj.pop();
const param_3 = obj.peek();
const param_4 = obj.empty();
console.log(param_2, param_3, param_4);

// Stack practice
function StackTwo() {
  let collection = [];

  // Print stack
  this.print = function () {
    console.log(collection);
  };

  // Add element to the stack
  this.push = function (element) {
    collection.push(element);
  };

  // Remove the element from the stack and return it
  this.pop = function () {
    return collection.pop();
  };

  // See the top level element in the stack
  this.top = function () {
    return collection[collection.length - 1];
  };

  // Determine if the stack is empty
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

// Implement queue using stacks - aka use push/pop to see FIFO elements
function MyQueueTwo() {
  this.inStack = [];
  this.outStack = [];
}

MyQueueTwo.prototype.push = function (element) {
  this.inStack.push(element);
};

MyQueueTwo.prototype.pop = function () {
  if (this.isEmpty()) return null;

  // Return the FIFO element using stack methods
  while (this.inStack.length > 1) {
    this.outStack.push(this.inStack.pop());
  }

  const pop = this.inStack.pop();

  while (this.outStack.length !== 0) {
    this.inStack.push(this.outStack.pop());
  }

  this.outStack = [];

  return pop;
};

MyQueueTwo.prototype.peek = function () {
  if (this.isEmpty()) return null;

  // Return the FIFO element
  while (this.inStack.length > 1) {
    this.outStack.push(this.inStack.pop());
  }

  const peekElement = this.inStack.pop();
  this.outStack.push(peekElement);

  while (this.outStack.length !== 0) {
    this.inStack.push(this.outStack.pop());
  }

  return peekElement;
};

MyQueueTwo.prototype.isEmpty = function () {
  return this.inStack.length === 0;
};

const obj2 = new MyQueueTwo();
obj2.push("x");
obj2.push("y");
const param_22 = obj2.pop();
const param_33 = obj2.peek();
const param_44 = obj2.isEmpty();
console.log(param_22, param_33, param_44);

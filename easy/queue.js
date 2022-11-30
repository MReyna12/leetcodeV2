// First in First Out
function Queue() {
  let collection = [];

  this.print = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    collection.push(element);
  };

  this.dequeue = function () {
    return collection.shift();
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}

const test = new Queue();

// Priority Queue
function PriorityQueue() {
  let collection = [];

  this.printCollection = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) collection.push(element);
    }
  };

  this.dequeue = function () {
    const value = collection.shift();
    return value;
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}

const pq = new PriorityQueue();
pq.enqueue(["Michael Reyna", 5]);
pq.enqueue(["Hillery Reyna", 3]);
pq.enqueue(["Kira Reyna", 2]);
pq.enqueue(["Emily Reyna", 3]);
pq.printCollection();

// First in First Out - Queue practice

function QueueTwo() {
  let collection = [];

  // Print
  this.print = function () {
    console.log(collection);
  };

  // Enqueue
  this.enqueue = function (element) {
    collection.push(element);
  };

  // Dequeue
  this.dequeue = function () {
    return collection.shift();
  };

  // Get Front Element
  this.front = function () {
    return collection[0];
  };

  // Get size of queue
  this.size = function () {
    return collection.length;
  };

  // Determine if queue empty
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

function QueueThree() {
  // Create our queue
  let collection = [];

  // Print the queue
  this.print = function () {
    console.log(collection);
  };

  // Add element to the queue
  this.enqueue = function (element) {
    collection.push(element);
  };

  // Remove the first element of the queue
  this.dequeue = function () {
    return collection.shift();
  };

  // Get the first element of the queue
  this.front = function () {
    return collection[0];
  };

  // Get the size of the collection
  this.size = function () {
    return collection.length;
  };

  // Determine if the queue is empty
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

function priorityQueueTwo() {
  let collection = [];

  // Print the priorityQueue
  this.print = function () {
    console.log(collection);
  };

  // Add element to the queue based on priority
  this.enqueue = function (element) {
    // If the collection is empty, then just add the element to the queue without determining the priority
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      // If the collection is not empty, then create a variable set to false to determine if the element has been added during the loop
      // Loop through the current queue and if the element to be added has a lower priority than the applicable element already in the collection, then place the new element in the place of the old element
      // Set added to true (so we don't add the element to the end of the queue) and break out of the loop because we've already added the new element to the queue
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }

      if (!added) collection.push(element);
    }
  };

  // Remove the first element of the queue
  this.dequeue = function () {
    return collection.shift();
  };

  // Return the front element of the queue
  this.front = function () {
    return collection[0]; // Returns the entire element (as opposed to just the queue position or string)
  };

  // Return the size of the queue
  this.size = function () {
    return collection.length;
  };

  // Determine if the queue is empty
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

function priorityQueueThree() {
  // Create queue
  let collection = [];

  // Print the current queue
  this.print = function () {
    console.log(collection);
  };

  // Add elements to the queue based on priority
  this.enqueue = function (element) {
    // If queue is empty, then simply add the element via push
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      // If the queue is not empty, then loop through the queue to determine where the element should be added in the queue - ascending order
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }

      if (!added) collection.push(element);
    }
  };

  // Removal of the first element from the queue
  this.dequeue = function () {
    return collection.shift();
  };

  // Return the first element of the queue
  this.front = function () {
    return collection[0];
  };

  // Determine the size of the queue
  this.size = function () {
    return collection.length;
  };

  // Determine if the queue is empty
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

const testQueue = new priorityQueueThree();

// Implement stack using queues
const MyStack = function () {
  this.inQueue = [];
  this.outQueue = [];
};

MyStack.prototype.push = function (x) {
  this.inQueue.push(x);
};

MyStack.prototype.pop = function () {
  while (this.inQueue.length > 1) {
    this.outQueue.push(this.inQueue.shift());
  }

  let number = this.inQueue.shift();
  this.inQueue = this.outQueue;
  this.outQueue = [];
  return number;
};

MyStack.prototype.top = function () {
  while (this.inQueue.length > 1) {
    this.outQueue.push(this.inQueue.shift());
  }

  let topElement = this.inQueue.shift();
  this.outQueue.push(topElement);
  this.inQueue = this.outQueue;
  this.outQueue = [];
  return topElement;
};

MyStack.prototype.empty = function () {
  return this.inQueue.length === 0 && this.outQueue.length === 0;
};

const obj = new MyStack();
obj.push(x);
const param_2 = obj.pop();
const param_3 = obj.top();
const param_4 = obj.empty();

// Queue practice

function QueueFour() {
  let collection = [];

  // Print collection
  this.print = function () {
    console.log(collection);
  };

  // Add element to the queue
  this.enqueue = function (element) {
    collection.push(element);
  };

  // Remove an element from the queue and return it
  this.dequeue = function () {
    return collection.shift();
  };

  // Return the front element of the queue
  this.front = function () {
    return collection[0];
  };

  // Return the length of the queue
  this.size = function () {
    return collection.length;
  };

  // Determine if the queue is empty
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

function PriorityQueueFour() {
  let collection = [];

  // Print the queue
  this.print = function () {
    console.log(collection);
  };

  // Add an element to the queue based on its priority
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) collection.push(element);
    }
  };

  // Remove the first element added to the queue
  this.dequeue = function () {
    return collection.shift();
  };

  // Get the front element
  this.front = function () {
    return collection[0];
  };

  // Determine if the queue is empty
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

const pqTest = new PriorityQueueFour();
pqTest.enqueue(["Michael", 3]);
pqTest.enqueue(["Hillery", 1]);
pqTest.enqueue(["Kira", 2]);
pqTest.print();

function MyStackTwo() {
  this.inQueue = [];
  this.outQueue = [];
}

MyStackTwo.prototype.push = function (element) {
  this.inQueue.push(element);
};

MyStackTwo.prototype.pop = function () {
  // Remove from the front of the queue, but returning the last element in because stack is LIFO
  while (this.inQueue.length > 1) {
    this.outQueue.push(this.inQueue.shift());
  }

  const pop = this.inQueue.shift();

  this.inQueue = this.outQueue;
  this.outQueue = [];

  return pop;
};

MyStackTwo.prototype.top = function () {
  // Remove from the front of the queue, return the last element, and then place all elements back into original queue
  while (this.inQueue.length > 1) {
    this.outQueue.push(this.inQueue.shift());
  }

  const top = this.inQueue.shift();

  this.outQueue.push(top);
  this.inQueue = this.outQueue;
  this.outQueue = [];

  return top;
};

MyStackTwo.prototype.empty = function () {
  return this.inQueue.length === 0;
};

const obj2 = new MyStackTwo();
obj2.push("Michael");
obj2.push("Hillery");
const param_22 = obj2.pop();
const param_33 = obj2.top();
const param_44 = obj2.empty();

console.log(param_22, param_33, param_44);

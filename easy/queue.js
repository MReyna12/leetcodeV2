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

const testQueue = new priorityQueueTwo();
testQueue.enqueue(["Michael", 3]);
testQueue.enqueue(["Hillery", 1]);
testQueue.enqueue(["Kira", 2]);
testQueue.print(); // [Hillery, Kira, Michael]
console.log(testQueue.dequeue()); // Hillery
testQueue.print(); // [Kira, Michael]
console.log(testQueue.front()); // Kira
console.log(testQueue.size()); // 2
testQueue.isEmpty(); // false

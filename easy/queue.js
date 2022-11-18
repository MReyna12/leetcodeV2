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

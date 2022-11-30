class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertLast(data) {
    let node = new Node(data);
    let current;

    // If there is nothing, then that means there is no head, so make the node the head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      // Once the next property no longer has a value of a node object, meaning it is null, we then set the current.next value of the previous node object to
      // a new node which will now be the last node of the list
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  insertAt(data, index) {
    // Trying to insert at an index that doesn't exist
    if (index > 0 && index > this.size) return;

    // Insert at first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first node in the list
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before the index we want to insert
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at an index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }

      count++;
      current = current.next;
    }

    return;
  }

  // Remove at an index
  removeAt(index) {
    if (index > 0 && index > this.size) return;

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first node
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertFirst(300);
linkedList.insertLast(400);
linkedList.insertAt(500, 3);

linkedList.printListData();

function Node(value = null, nextNode = null) {
  const getNext = () => nextNode;
  const getValue = () => value;
  const setNext = (ptr) => {
    nextNode = ptr;
  };
  return {
    value: value,
    nextNode: nextNode,

    getNext,
    getValue,
    setNext,
  };
}

function LinkedList() {
  let head = null;
  let count = 0;

  const append = (value) => {
    // Add node to end of linked list
    // Empty list condition
    if (count === 0) {
      head = Node(value);
    } else {
      // Not empty list condition
      let curr = head;
      while (curr.getNext() !== null) {
        curr = curr.getNext();
      }

      let newNode = Node(value);
      curr.setNext(newNode);
    }

    count += 1;
  };

  const prepend = (value) => {
    // Add node to beginning of linked list
    // Empty list condition
    if (count === 0) {
      head = Node(value);
    } else {
      // Not empty list condition
      let newNode = Node(value, head);
      head = newNode;
    }

    count += 1;
  };

  const getSize = () => count;

  const getHead = () => head;

  const getTail = () => {
    let curr = head;
    while (curr.getNext() !== null) {
      curr = curr.getNext();
    }

    return curr;
  };

  const atIndex = (index) => {
    // Return node at index
    if (count === 0) {
      console.log("Empty list");
      return;
    }
    if (index + 1 > count) {
      console.log("Index error");
      return;
    }

    let curr = head;
    for (let i = 0; i < index; i++) {
      curr = curr.getNext();
    }

    return curr;
  };

  const pop = () => {
    // Remove last element from list
    if (count === 0 || count === 1) {
      head = null;
      count = 0;
      return;
    }

    let prev = head;
    let curr = head.getNext();
    while (curr.getNext() !== null) {
      prev = curr;
      curr = curr.getNext();
    }
    prev.setNext(null);
    count -= 1;
  };

  const contains = (value) => {
    // True if list contains value
    let curr = head;

    while (curr !== null && curr.getValue() !== value) {
      curr = curr.getNext();
    }

    return curr !== null;
  };

  const find = (value) => {
    // Returns index of node with value

    let curr = head;
    let index = 0;

    while (curr !== null && curr.getValue() !== value) {
      curr = curr.getNext();
      index += 1;
    }

    if (curr === null) return "Not found";
    return index;
  };

  const toString = () => {
    // Converst LL to string
    if (count === 0) return "(Empty)";

    let curr = head.getNext();
    let ret = "( " + head.getValue() + " )";

    while (curr !== null) {
      ret += " --> ( " + curr.getValue() + " )";

      curr = curr.getNext();
    }

    return ret;
  };

  const insertAt = (value, index) => {
    // Inserts value at index
    if (index + 1 > count) {
      append(value);
      console.log("Index out of range. Node added to end of list");
      return;
    } else if (index === 0) {
      prepend(value);
      return;
    }

    let prev = head;
    for (let i = 0; i < index; i++) {
      prev = prev.getNext();
    }

    let newNode = Node(value, prev.getNext());
    prev.setNext(newNode);

    count += 1;
  };

  const removeAt = (index) => {
    // Removes node at index
    if (index + 1 > count) {
      console.log("Index out of range, no removals");
      return;
    } else if (index === 0) {
      head = head.getNext();
      count -= 1;
      return;
    }

    let prev = head;
    let curr = head.getNext();

    for (let i = 1; i < index; i++) {
      prev = curr;
      curr = curr.getNext();
    }

    prev.setNext(curr.getNext());

    count -= 1;
  };

  return {
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    atIndex,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

// const l = LinkedList();
// l.append("Start");
// l.append("Hey");
// l.append("Ho");
// l.append("End");
// console.log("Size: " + l.getSize());
// console.log("Head: " + l.getHead().getValue());
// l.prepend("NewHead");
// console.log("New Head: " + l.getHead().getValue());
// console.log("Tail: " + l.getTail().getValue());
// l.pop();
// console.log("New Tail: " + l.getTail().getValue());
// console.log("Index 2 = " + l.atIndex(2).getValue());
// console.log("Contains Ho? " + l.contains("Ho"));
// console.log("Contains Bo? " + l.contains("Bo"));
// console.log("Index of Hey: " + l.find("Hey"));
// console.log("Index of null: " + l.find("null"));
// console.log(l.toString());
// l.insertAt("New Beginning", 0);
// l.insertAt("Insert", 1);
// l.insertAt("Out of range", 99);
// l.removeAt(6);
// console.log(l.toString());

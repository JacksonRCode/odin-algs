import { mergeSort, merge } from "./merge.js";

const Node = (value, left = null, right = null) => {
  let _value = value;
  let _left = left;
  let _right = right;

  const getValue = () => _value;
  const setValue = (newVal) => {
    _value = newVal;
  };

  const setLeft = (newLeft) => {
    _left = newLeft;
  };
  const setRight = (newRight) => {
    _right = newRight;
  };
  const getLeft = () => _left;
  const getRight = () => _right;

  const numKids = () => {
    if (_left || _right) {
      if (_left && _right) return 2;
      return 1;
    }
    return 0;
  };

  return {
    getValue,
    setValue,
    setLeft,
    setRight,
    getLeft,
    getRight,
    numKids,
  };
};

const Tree = (arr) => {
  let _arr;
  let _root = null;

  const buildTree = (array, start = 0, end = array.length - 1) => {
    if (start > end) return null;

    let mid = start + Math.floor((end - start) / 2);

    let newRoot = Node(array[mid]);
    // Left subtree
    newRoot.setLeft(buildTree(array, start, mid - 1));
    // Right subtree
    newRoot.setRight(buildTree(array, mid + 1, end));

    return newRoot;
  };

  const prettyPrint = (node = _root, prefix = "", isLeft = true) => {
    if (node === null) {
      // console.log("HERE");
      return;
    }
    if (node.getRight !== null) {
      prettyPrint(
        node.getRight(),
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.getValue()}`);
    if (node.getLeft() !== null) {
      prettyPrint(node.getLeft(), `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  const insert = (value) => {
    // blah blah insert
    const newNode = Node(value);

    if (!_root) {
      _root = newNode;
      return;
    }

    // let value = newItem.getValue();
    let prev;
    let curr = _root;
    while (curr !== null) {
      prev = curr;
      let left = curr.getLeft();
      let right = curr.getRight();
      let currValue = curr.getValue();

      if (!left || !right) {
        // If one of them is null, set curr to the other one.
        curr = !right ? left : right;
      } else {
        curr = value < currValue ? left : right;
      }
    }

    // If previous node has left child, set right
    // This makes default setting to left.
    const prevValue = prev.getValue();
    if (prevValue < value) {
      prev.setRight(newNode);
      return;
    }
    prev.setLeft(newNode);
    return;
  };

  const deleteItem = (value, curr = _root) => {
    // blah blah delete

    /*
      1. Find node
    */
    let prev;
    let direction;
    // Find the node to be deleted and set it to curr
    while (curr.getValue() !== value) {
      prev = curr;
      let currValue = curr.getValue();
      if (value > currValue) {
        curr = curr.getRight();
        direction = "right";
      } else {
        curr = curr.getLeft();
        direction = "left";
      }

      if (curr === null) return "That item is not in hash map";
    }

    // Case 1: no children;
    if (curr.numKids() === 0) {
      if (direction === "right") {
        prev.setRight(null);
      } else {
        prev.setLeft(null);
      }

      return "Removed " + value;
    }

    // Case 2: single child
    else if (curr.numKids() === 1) {
      let replace = !curr.getLeft() ? curr.getRight() : curr.getLeft();
      if (direction === "right") {
        prev.setRight(replace);
      } else {
        prev.setLeft(replace);
      }

      return "Removed " + value;
    }

    // Case 3: two children\
    else {
      // Find smallest element in right side of tree from curr
      let replace = curr.getRight();
      let replacePrev;
      while (replace.getLeft() !== null) {
        replacePrev = replace;
        replace = replace.getLeft();
      }
      // Set previous elements left child to smallest elements right child
      replacePrev.setLeft(replace.getRight());

      // Set prvious of deletion item to
      replace.setLeft(curr.getLeft());
      replace.setRight(curr.getRight());
      if (direction === "right") {
        prev.setRight(replace);
      } else {
        prev.setLeft(replace);
      }

      return "Removed " + value;
    }
  };

  const find = (value) => {
    // blah blah find
    let curr = _root;

    while (curr) {
      let currentValue = curr.getValue();
      if (currentValue === value) {
        return curr;
      }

      if (value > currentValue) {
        curr = curr.getRight();
      } else {
        curr = curr.getLeft();
      }
    }

    return "Value not found";
  };

  const levelOrder = (callback, queue = [_root]) => {
    // blah blah breadth-first traversal with callback on each node.
    // Use array (queue) to keep track of child nodes yet to traverse

    let curr = queue.splice(0, 1)[0];

    if (!curr) return;

    let left = curr.getLeft();
    let right = curr.getRight();

    if (left) queue.push(curr.getLeft());

    if (right) queue.push(curr.getRight());

    callback(curr);
    levelOrder(callback, queue);
  };

  const inOrder = (callback) => {
    // Inorder traversal
  };

  const preOrder = (callback) => {
    // pre order traversal
  };

  const postOrder = (callback) => {
    // post order traversal
  };

  const height = (node) => {
    // Return height of node --> longest path from node to leaf
  };

  const depth = (node) => {
    // Return depth of node
  };

  const isBalanced = () => {
    // Check if tree is balanced
  };

  const rebalance = () => {
    buildTree(_arr);
  };

  const init = () => {
    _arr = mergeSort(arr);
    _root = buildTree(_arr);
  };

  init();

  return {
    prettyPrint,
    insert,
    deleteItem,
    find,
    levelOrder,
  };
};

let arr = [1, 7, 4, 23, 8, 9, 3, 5, 67, 6345, 324];
let spruce = Tree(arr);
spruce.insert(13);
// console.log(spruce.deleteItem(0));
spruce.prettyPrint();
// console.log(spruce.find(7));

spruce.levelOrder((value) => {
  console.log(value.getValue());
});

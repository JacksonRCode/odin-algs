import { mergeSort, merge } from "./merge.js";

const Node = (value, left = null, right = null) => {
  let _value = value;
  let _left = left;
  let _right = right;

  const getValue = () => _value;
  const setValue = (newVal) => {
    value = newVal;
  };

  const setLeft = (newLeft) => {
    _left = newLeft;
  };
  const setRight = (newRight) => {
    _right = newRight;
  };
  const getLeft = () => _left;
  const getRight = () => _right;

  return {
    getValue,
    setValue,
    setLeft,
    setRight,
    getLeft,
    getRight,
  };
};

const Tree = (arr) => {
  let _arr;
  let _root;

  const buildTree = (array, start = 0, end = array.length - 1) => {
    if (start > end) return null;

    let mid = start + Math.floor((end - start) / 2);

    let newRoot = Node(arr[mid]);
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

  const insert = (newItem) => {
    // blah blah insert
  };

  const deleteItem = (value) => {
    // blah blah delete
  };

  const find = (value) => {
    // blah blah find
  };

  const levelOrder = (callback) => {
    // blah blah breadth-first traversal with callback on each node.
    // Use array (queue) to keep track of child nodes yet to traverse
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

  return { prettyPrint };
};

let arr = [1, 7, 4, 23, 8, 9, 3, 5, 67, 6345, 324];
let spruce = Tree(arr);
// spruce.prettyPrint();

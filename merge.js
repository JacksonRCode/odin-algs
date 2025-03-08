const mergeSort = (arr) => {
  /*
    1. Find center
    2. Split and call on both sides
    3. Loop to put in correct place
  */
  if (arr.length < 2) return arr;

  let split = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, split));
  let right = mergeSort(arr.slice(split));

  return merge(left, right);
};

const merge = (left, right) => {
  let newArr = [];
  let j = 0;
  let k = 0;

  while (j < left.length || k < right.length) {
    let val1 = left[j];
    let val2 = right[k];

    if (k === right.length || val1 < val2) {
      newArr.push(val1);
      j += 1;
    } else {
      newArr.push(val2);
      k += 1;
    }
  }
  return newArr;
};

let ex = [3, 2, 1, 13, 8, 5, 0, 1];

console.log(mergeSort(ex));

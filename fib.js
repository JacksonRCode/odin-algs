// Iterative version

const fibsIter = (n) => {
  let arr = [0];

  for (let i = 1; i < n; i++) {
    if (!arr[i - 1]) {
      arr.push(1);
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }

  return arr;
};

// Recursive version

const fibsRec = (n, prev2 = null, prev = null) => {
  if (n === 0) return [];
  if (prev === null) return [0].concat(fibsRec(n - 1, null, 0));
  if (prev2 === null) return [1].concat(fibsRec(n - 1, 0, 1));

  let newVal = prev2 + prev;
  return [newVal].concat(fibsRec(n - 1, prev, newVal));
};

console.log(fibsRec(32));

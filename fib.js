const fibIter = (n) => {
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

console.log(fibIter(8));

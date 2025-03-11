function checkIndexERR(index, buckets) {
  if (index < 0 || index >= buckets.getLength()) {
    throw new Error("Trying to access index out of bounds");
  }
}

const HashMap = (loadFac, capacity) => {
  let map = [];
  let total = 0;
  let _capacity = capacity;

  const initMap = () => {
    map = Array(_capacity).fill(null);
    total = 0;
  };

  const increaseMapCap = () => {
    console.log("REPOPULATION");
    _capacity = _capacity * 2;
    total = 0;
    // Start at end of old map
    let temp = [...map];
    map = Array(_capacity).fill(null);

    for (let i = 0; i < _capacity / 2 - 1; i++) {
      if (temp[i] !== null) {
        set(temp[i][0], temp[i][1]);
      }
    }
    console.log(map);
  };

  const hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % _capacity;
  };

  const set = (key, value) => {
    let hashedKey = hash(key);
    if (map[hashedKey] !== null) {
      console.log("Replacing value: " + map[hashedKey]);
      total -= 1;
    }

    map[hashedKey] = [key, value];
    total += 1;

    let frac = total / _capacity;
    if (frac > loadFac) {
      console.log("Frac: " + frac);
      increaseMapCap();
    }
  };

  const get = (key) => {
    // Return true if key is in hash map;
    return map[hash(key)] !== null;
  };

  const remove = (key) => {
    // Remove entry with "key" from hash map
    // Return true for success and false for failure
    let index = hash(key);
    let val = map[index];
    map[index] = null;

    if (val) total -= 1;

    return val !== null;
  };

  const length = () => total;

  const clear = () => {
    // Clear hash map
    initMap();
  };

  const keys = () => {
    // Return array of keys inside hash map
    let keys = [];
    map.forEach((obj) => {
      if (obj !== null) keys.push(obj[0]);
    });

    return keys;
  };

  const values = () => {
    // Return array of values in hash map
    let vals = [];
    map.forEach((obj) => {
      if (obj !== null) vals.push(obj[1]);
    });

    return vals;
  };

  const entries = () => {
    // Return array of [key, value] pairs from hash map
    let entries = [];
    map.forEach((obj) => {
      if (obj !== null) entries.push([obj[0], obj[1]]);
    });

    return entries;
  };

  initMap();

  return {
    set,
    get,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
};

const test = HashMap(0.6, 16);
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("moon", "silver");

console.log("HAT? " + test.get("hat"));
test.remove("Hat");
console.log(test.entries());
console.log(test.keys());
console.log(test.values());
console.log("Length: " + test.length());

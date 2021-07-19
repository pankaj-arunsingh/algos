const memoize = (func) => {
  const results = {};
  return (...args) => {
    const argsKey = JSON.stringify(args);
    console.log("args key", argsKey);
    if (!results[argsKey]) {
      results[argsKey] = func(...args);
    }
    return results[argsKey];
  };
};

const clumsySquare = memoize((num) => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      result++;
    }
  }
  return result;
});
console.time("First call");
console.log(clumsySquare(9467));
console.timeEnd("First call");

// use the same value two times
console.time("Second call");
console.log(clumsySquare(9467));
console.timeEnd("Second call");

console.time("Third call");
console.log(clumsySquare(9467));
console.timeEnd("Third call");

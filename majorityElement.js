const majorityElement = (arr) => {
  const sortedArr = arr.sort();
  return sortedArr[Math.floor(sortedArr.length / 2)];
};
console.time("majorityElement");
console.log(
  majorityElement([
    1, 4, 2, 4, 4, 3, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 11, 1,
  ])
);
console.timeEnd("majorityElement");
// without sorted array and faster
const anotherMajorityElement = (arr) => {
  const hash = arr.reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let max = 0,
    val;
  for (const key in hash) {
    if (hash[key] > max) {
      max = hash[key];
      val = key;
    }
  }
  return val;
};

console.time("anotherMajorityElement");
console.log(
  anotherMajorityElement([
    1, 4, 2, 4, 4, 3, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 11, 1,
  ])
);
console.timeEnd("anotherMajorityElement");

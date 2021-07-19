const intersection = (arr1, arr2) => {
  let result = {};
  for (const ele of arr1) if (arr2.indexOf(ele) !== -1) result[ele] = ele;
  return Object.values(result);
};

console.time("intersection");
console.log(
  intersection(
    [1, 2, 1, 3, 4, "blaah", "blaah"],
    [1, 6, 7, 8, 4, 9, 8, 9, 3, "blaah", "blaah"]
  )
);
console.timeEnd("intersection");

// faster
const intersectionFast = (arr1, arr2) => {
  const set = new Set(arr1);
  const filteredSet = new Set(arr2.filter((ele) => set.has(ele)));
  return [...filteredSet];
};
console.time("intersectionFast");
console.log(
  intersectionFast(
    [1, 2, 1, 3, 4, "blaah", "blaah"],
    [1, 6, 7, 8, 4, 9, 8, 9, 3, "blaah", "blaah"]
  )
);
console.timeEnd("intersectionFast");

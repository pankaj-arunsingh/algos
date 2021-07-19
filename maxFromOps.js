const maxFromOps = (m, n, operations) => {
  let minRow = m;
  let minCol = n;
  for (let op of operations) {
    minRow = Math.min(minRow, op[0]);
    minCol = Math.min(minCol, op[1]);

    console.log("in for of loop", op);
    console.log("minCol and minRow", minCol, minRow);
  }
  return minCol * minRow;
};
console.log(
  maxFromOps(4, 4, [
    [3, 3],
    [3, 3],
    [1, 3],
  ])
);

console.log(
  maxFromOps(4, 4, [
    [1, 1],
    [2, 2],
  ])
);
console.log(
  maxFromOps(4, 4, [
    [1, 1],
    [2, 2],
    [3, 3],
  ])
);

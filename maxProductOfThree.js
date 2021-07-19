// O(n^3) time bruteForce
const threeSumBrute = (arr) => {
  let maxProduct = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        product = arr[i] * arr[j] * arr[k];
        if (product > maxProduct) {
          maxProduct = product;
        }
      }
    }
  }
  return maxProduct;
};
//console.log(threeSumBrute([-1, 9, 22, 3, -15, -7])); //2310

// O(n log n) sorted
const arr = [-1, 9, 22, 3, -15, -7];
const threeProduct = (arr = []) => {
  const sorter = (a, b) => a - b;
  arr.sort(sorter);
  const arrLen = arr.length;
  return Math.max(
    arr[0] * arr[1] * arr[arrLen - 1],
    arr[arrLen - 1] * arr[arrLen - 2] * arr[arrLen - 3]
  );
};
console.log("three product", threeProduct(arr)); //2310

// Greedy approach
const maxThreeSum = (arr) => {
  let highest = Math.max(arr[0], arr[1]);
  let lowest = Math.min(arr[0], arr[1]);
  let highestProductOf2 = arr[0] * arr[1];
  let lowestProductOf2 = arr[0] * arr[1];
  let highestProductOf3 = arr[0] * arr[1] * arr[2];

  for (let i = 2; i < arr.length; i++) {
    let current = arr[i];

    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    );

    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    );

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    );

    highest = Math.max(highest, current);

    lowest = Math.min(lowest, current);
  }

  return highestProductOf3;
};
console.log(maxThreeSum([-1, 9, 22, 3, -15, -7])); //2310
console.log(maxThreeSum([0, 1, 2, 3])); //6
console.log(maxThreeSum([-12, -7, -1, 11, 17])); //1428

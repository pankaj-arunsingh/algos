const swap = (arr, firstIdx, secIdx) => {
  const temp = arr[firstIdx];
  arr[firstIdx] = arr[secIdx];
  arr[secIdx] = temp;
};
const leastMissingNumber = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] > 0 &&
      nums[i] <= nums.length &&
      nums[nums[i] - 1] !== nums[i]
    ) {
      swap(nums, i, nums[i] - 1);
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j + 1) {
      return j + 1;
    }
  }
  return nums.length + 1;
};
console.log(leastMissingNumber([0, 2, -1, -2, 1, 3, 5]));

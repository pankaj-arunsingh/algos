/* for any element within the circular array, the next immediate larger number 
could be found circularly-- past the end and before it. 
If there is no number greater, return -1.
https://algodaily.com/challenges/next-greater-element-in-a-circular-array
*/
const nextLargerNumber = (nums) => {
  const result = [];
  const stack = [];
  for (let j = 0; j < nums.length; j++) {
    result.push(-1);
  }
  for (let i = 0; i < nums.length * 2; i++) {
    let num = nums[i % nums.length];
    while (stack.length && nums[stack[stack.length - 1]] < num) {
      result[stack.pop()] = num;
    }
    if (i < nums.length) {
      stack.push(i);
    }
  }
  return result;
};

console.log(nextLargerNumber([3, 1, 3, 4])); //should be equal [4, 3, 4, -1]

const productExceptSelf = (nums) => {
  console.log(nums);
  let outPutArray = [];
  for (let i = 0; i < nums.length; i++) {
    let val = 1;
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        val = val * nums[j];
      }
    }
    outPutArray.push(val);
  }
  return outPutArray;
};
const productExceptSelfLinear = (arr) => {
  let temp = [];

  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    temp[i] = product;
    product *= arr[i];
  }

  product = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    temp[i] *= product;
    product *= arr[i];
  }

  return temp;
};
console.log(productExceptSelf([1, 2, 4, 16]));
console.log(productExceptSelfLinear([1, 2, 4, 16]));

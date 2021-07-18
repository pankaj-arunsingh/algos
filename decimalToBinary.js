const decimalToBinary = (decimalNum) => {
  if (decimalNum >= 1) {
    if (decimalNum % 2) {
      return decimalToBinary((decimalNum - 1) / 2) + 1;
    } else {
      return decimalToBinary(decimalNum / 2) + 0;
    }
  } else {
    return "";
  }
};

console.log(decimalToBinary(100));

const decimalToBin = (num) => {
  if (num >= 1) {
    if (num % 2) {
      return decimalToBin((num - 1) / 2) + 1;
    } else {
      return decimalToBin(num / 2) + 0;
    }
  } else {
    return "";
  }
};
console.log(decimalToBin(100));

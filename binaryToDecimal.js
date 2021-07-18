const binaryToDecimal = (num) => {
  let decimal = 0;
  digit = num.toString();

  for (let i = digit.length, j = 0; i > 0, j < digit.length; i--, j++) {
    decimal = decimal + Number(digit.charAt(i - 1)) * Math.pow(2, j);
  }
  return decimal;
};
console.log(binaryToDecimal(11101)); //29
console.log(binaryToDecimal(10110111)); //183

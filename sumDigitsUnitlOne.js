const sumDigitsUntilOne = (num) => {
  let sum = 0;
  if (num < 10) return num;
  sum = sumDigitsUntilOne((num % 10) + parseInt(num / 10));
  return sum;
};

console.log(sumDigitsUntilOne(101));

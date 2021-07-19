/* If it's a multiple of 3, represent it as "fizz".
If it's a multiple of 5, represent it as "buzz".
If it's a multiple of both 3 and 5, represent it as "fizzbuzz".
If it's neither, just return the number itself. */
const fizzBuzz = (n) => {
  let i = 1;
  let resultString = "";
  if (n !== 0) {
    while (i <= n) {
      if (i % 3 === 0 && i % 5 === 0) {
        resultString += "fizzbuzz";
      } else if (i % 3 === 0) {
        resultString += "fizz";
      } else if (i % 5 === 0) {
        resultString += "buzz";
      } else {
        resultString += `${i}`;
      }
      i++;
    }
  }
  return resultString;
};

console.log(fizzBuzz(15));

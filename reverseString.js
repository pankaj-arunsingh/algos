// faster
const reverseString = (str = "") => {
  const strArray = str.split("");
  end = strArray.length - 1;
  let reverseString = "";
  for (let i = end; i >= 0; i--) {
    reverseString += strArray[i];
  }
  return reverseString;
};

console.log(reverseString("pankaj"));

const anotherReverseString = (str = "") => {
  const strArray = str.split("");
  let end = strArray.length - 1;
  let start = 0;
  let temp = "";
  while (start < end) {
    temp = strArray[start];
    strArray[start] = strArray[end];
    strArray[end] = temp;
    end--;
    start++;
  }
  return strArray.join("");
};

console.log(anotherReverseString("pankaj"));

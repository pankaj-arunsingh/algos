/* a countdown method which counts below a given number until 0 */
const countDown = (num) => {
  if (num === 0) return 0;
  console.log(num);
  return countDown(num - 1);
};

//console.log(countDown(10));
/* Use below array and make tree out of it like below
 {
  "animals": {
    "mammals": {
      "cats": {
        "persian": {},
        "siamese": {}
      },
      "dogs": {
        "chihuahua": {},
        "labrador": {}
      }
    }
  }
}*/
let categories = [
  { id: "animals", parent: null },
  { id: "mammals", parent: "animals" },
  { id: "cats", parent: "mammals" },
  { id: "dogs", parent: "mammals" },
  { id: "chihuahua", parent: "dogs" },
  { id: "labrador", parent: "dogs" },
  { id: "persian", parent: "cats" },
  { id: "siamese", parent: "cats" },
];

// console.log(categories.filter((c) => c.parent === null));
const makeTree = (categories, parent) => {
  let node = {};
  categories
    .filter((c) => c.parent === parent)
    .forEach((c) => (node[c.id] = makeTree(categories, c.id)));
  return node;
};
// console.log(JSON.stringify(makeTree(categories, null), null, 2));

// count from one to a given number
const countUPRecursive = (num) => {
  if (num <= 0) return;
  else num - countUPRecursive(num - 1);
  console.log(num);
};
// countUPRecursive(5);

// factorial iterative
const iterativeFactorial = (num) => {
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result = result * i;
  }
  return result;
};
//console.log(iterativeFactorial(4));

// recursive factorial
const recursiveFactorial = (num) => {
  let result = 0;
  if (num === 1) result = 1;
  else result = num * recursiveFactorial(num - 1);

  return result;
};
console.log(recursiveFactorial(5));

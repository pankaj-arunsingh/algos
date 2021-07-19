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
let company = {
  // the same object, compressed for brevity
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else {
    // case (2)
    let sum = 0;

    for (let subdep of Object.values(department)) {
      console.log("subdep", subdep);
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}
console.log("sum of salaries", sumSalaries(company));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}
function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}
printReverseList(list);
printList(list);

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13

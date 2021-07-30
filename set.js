const mySet1 = new Set();

mySet1.add(1); // Set [ 1 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add("some text"); // Set [ 1, 5, 'some text' ]
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay
console.log(mySet1.keys());
console.log(mySet1.values());
for (let item of mySet1) console.log(item);
for (let item of mySet1.keys()) console.log(item);
console.log(mySet1);
const mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2);

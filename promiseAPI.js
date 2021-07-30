// promise.all
const promise1 = Promise.resolve(4);
const promise2 = 45;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values)
);

//Promise.allSettled()
const promise4 = Promise.resolve(3);
const promise5 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promises = [promise4, promise5];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status))
);

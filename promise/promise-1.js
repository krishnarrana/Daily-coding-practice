var p1 = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove([1, 2, 3, 4]);
  }, 2000);
});
p1.then(arr => {
  console.log("Promise p1 reslove with data: ", arr);
});

console.log("do this task first");

var p1 = new Promise((reslove, reject) => {
  setTimeout(() => {
    reject("Error");
  }, 2000);
});
p1.then(arr => {
  console.log("Promise p1 reslove with data: ", arr);
}).catch(error => console.log(error));

console.log("do this task first");

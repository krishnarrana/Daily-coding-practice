let a, b;
function getB() {
  setTimeout(function() {
    b = 20;
    a + b;
  }, 400);
}
function getA() {
  setTimeout(function() {
    a = 20;
  }, 400);
}
let k = sum(getB(), getA(), function() {});
console.log(k);

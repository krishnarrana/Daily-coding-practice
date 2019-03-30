function outter() {
  let start = "Clousers are";
  return function inner() {
    return start + " awesome";
  };
}

console.log(outter()());

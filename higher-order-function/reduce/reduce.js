const mentors = ["Jack", "Rich", "Mad"];
const str = mentors.reduce((accumulator, nextValue) => {
  return (accumulator += " " + nextValue);
}, "The mentors are ");
console.log(str);

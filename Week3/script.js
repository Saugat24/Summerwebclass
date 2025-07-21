// let attendance = {
//   studentName: "John Doe",
//   studentNumber: "np03cs4590",
//   classGroup: 3,
//   isPresent: true,
// };

// console.log(attendance);
// console.log(attendance.isPresent);

// const string1 = prompt("Enter a string");
// const string2 = prompt("Enter another string");
// if (string1 == string2) {
//   console.log("The strings are equal");
// } else {
//   console.log("The strings are not equal");
// }

guess = 25;
let user = prompt("Enter a number");
while (user != guess) {
  user = prompt("Guess again");
}
console.log("You guess it");

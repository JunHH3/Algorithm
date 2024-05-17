let fs = require("fs");
let filePath =
  process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

const a = parseInt(input);

if (90 <= a && a <= 100) {
  console.log("A");
} else if (80 <= a && a <= 89) {
  console.log("B");
} else if (70 <= a && a <= 79) {
  console.log("C");
} else if (60 <= a && a <= 69) {
  console.log("D");
} else {
  console.log("F");
}

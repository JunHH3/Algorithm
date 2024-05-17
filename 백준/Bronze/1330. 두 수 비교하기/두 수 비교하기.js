let fs = require("fs");
let filePath =
  process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);


if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else {
  console.log("==");
}

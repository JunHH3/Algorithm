let fs = require("fs");
// const { parse } = require("path");
let filePath =
  process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

let result = "";
let A = Number(input[0]);

for (let i = 1; i <= A; i++) {
  result += i + "\n";
}

console.log(result);

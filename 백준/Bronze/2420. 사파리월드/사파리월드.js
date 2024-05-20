let fs = require("fs");
// const { parse } = require("path");
let filePath =
  process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

let C = Math.abs(A - B);
console.log(C);

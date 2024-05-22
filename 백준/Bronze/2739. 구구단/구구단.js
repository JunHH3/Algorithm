let fs = require("fs");
let filePath =
  process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);

for (let i = 1; i < 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}

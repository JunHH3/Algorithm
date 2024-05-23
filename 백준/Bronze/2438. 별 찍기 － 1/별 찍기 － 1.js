let fs = require("fs");
const { start } = require("repl");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  console.log("*".repeat(i));
}

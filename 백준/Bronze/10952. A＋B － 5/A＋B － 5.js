let fs = require("fs");
const { start } = require("repl");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length-1; i++) {
  let input1 = +input[i][0] + +input[i][2];

  console.log(input1);
}

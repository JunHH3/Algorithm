let fs = require("fs");
let filePath =
  process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let day = parseInt(input[0]);
let arr = input[1].split(" ").map(Number);

function solution(day, arr) {
  let answer = 0;
  for (let a of arr) {
    if (a % 10 === day) answer++;
  }
  return answer;
}
console.log(solution(day, arr));

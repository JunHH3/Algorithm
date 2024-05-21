let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let heights = input;
let sum = heights.reduce((acc, cur) => acc + cur, 0);

let finish = false;
let save = [];
for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (heights[i] + heights[j] === sum - 100) {
      save = [i, j];
      finish = true;
      break;
    }
  }
  if (finish) break;
}

heights.splice(save[1], 1); // 두 번째 인덱스를 먼저 삭제
heights.splice(save[0], 1); // 첫 번째 인덱스를 나중에 삭제

heights.sort((a, b) => a - b);

heights.forEach(height => console.log(height));

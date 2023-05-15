let fs = require('fs');
let input = fs.readFileSync('text.txt').toString().split('\n');

let a = Number(input[0]);

let star = '';

for(let i = 0; i < a; i++){ // 총 5번 반복(행)
  for(let j = 0; j <= i; j++){ // 현재 행만큼 별 출력
    star += '*'
  }
  star += '\n';
}

console.log(star)
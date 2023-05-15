let fs = require('fs');
let input = fs.readFileSync('text.txt').toString().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let c = Number(input[1]);

let total = (a * 60) + b + c; // 분의 형태로 바꾸기
total %= 1440; // 혹시나 하루가 지날까봐

let hour = parseInt(total / 60);
let min = total % 60;

console.log(hour)
console.log(min)

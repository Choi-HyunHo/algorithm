let fs = require('fs');
let input = fs.readFileSync('./2588/text.txt').toString().split('\n');

let a = input[0]
let b = input[1]

console.log(Number(a) * Number(b[2]))
console.log(Number(a) * Number(b[1]))
console.log(Number(a) * Number(b[0]))
console.log(Number(a) * Number(b))
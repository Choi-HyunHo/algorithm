let fs = require('fs');
let input = fs.readFileSync('./2884/text.txt').toString().split('\n');

let hour = Number(input[0].split(' ')[0])
let min = Number(input[0].split(' ')[1])

if(hour <= 23){
  hour -= 1
  min += 15
  if(hour < 0) {
    hour = 23
  }
}

console.log(hour)
console.log(min)
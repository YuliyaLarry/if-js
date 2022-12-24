let user = "John Doe";
let student = "Yuliya";
user = student;
console.log(user);
// yuliya;

let test = 1
test = Boolean(test);
console.log(test)
test ++
test += 1
test -= 1

console.log(test)

const number = [2, 3, 5, 8]
let res = 1;
for (let i = 0; i < number.length; i++){
  res = res * number[i]
}

console.log(res)

let num = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < num.length; i++) {
  if (num[i] > 5 && num[i] < 10) {
    console.log(num[i])
  }
}

const massive = [2, 5, 8, 15, 0, 6, 20, 3]

for (let i = 0; i < massive.length; i++){
  if (massive[i] % 2 == 0){
    console.log(massive[i])
  }
}
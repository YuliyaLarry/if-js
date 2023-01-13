let user = "John Doe";
let student = "Yuliya";
user = student;
console.log(user);
// yuliya;

let test = 1;
test = Boolean(test);
console.log(test);
test++;
test += 1;
test -= 1;

console.log(test);

const number = [2, 3, 5, 8];
let res = 1;
for (let i = 0; i < number.length; i++) {
  res *= number[i];
}

console.log(res);

let num = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < num.length; i++) {
  if (num[i] > 5 && num[i] < 10) {
    console.log(num[i]);
  }
}

const array = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log(array[i]);
  }
}

// lesson 3

function palindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("шалаш"));

function min1(a, b) {
  if (a > b) {
    return b;
  }
    return a;
}

const min2 = (a, b) => a < b ? a : b;

function max1(a, y) {
  if (a > y) {
    return a;
  }
  return y;
}

const max2 = (a, y) => a > y ? a : y;

const numbers = [20, 15, 8, 9, 0, 6, 50, 3, 27, 100]
  const replaceZero = (array) => {
    const newArray = [...array]
    for (let i = 0; i < newArray.length; i++) {
      if (String(newArray[i]).includes('0')) {
        newArray[i] = String(newArray[i]).replace(/0/g, 'zero')
      }
    }
    console.log(newArray)
}
replaceZero(numbers)



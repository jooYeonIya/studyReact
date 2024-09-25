let a = [1, 2];
let b = [1, 2];
let c = a;

// 배열의 값만 복사, 참조값 복사 아님
let d = [...a];

let e = [3, 4];

let f = [...a,...e];

c.push(3);

console.log(a == c); // 출력: true
console.log(a == d); // 출력: false
console.log(b == b); // 출력: true


console.log(c);
console.log(b);
console.log(a); // 출력 1, 2, 3  c에 새로운 값을 넣으면 참조값이기 때문에 123 출력되는 것 

console.log(f);
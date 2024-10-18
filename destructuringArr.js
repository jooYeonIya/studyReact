let arr = [1, 2, 3, 4, 5, 6, 7];

let [a, b, c,...rest] = arr;

// 구조 분해 할당
console.log(a); // 출력 1
console.log(rest); // 출력 4, 5, 6, 7

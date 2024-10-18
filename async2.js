import { readFileSync, readFile} from 'node:fs';

// 동기함수는 실행 되는 걸 기다려서 순서대로 반영
console.log(1);

// readFileSync는 동기 함수
const data = readFileSync('sample.txt');
console.log(data);

console.log(3);

// 따라서 출력 순서는
/*
1
<sample.txt 파일의 내용> 
3
*/


// 비동기 함수는 일단 다른 거 먼저 하고 처리되는 대로 반영
console.log(1);

// readFile는 비동기 함수
readFile('sample.txt', (err, data) => {
    if(err) throw err;
    console.log("2 ==> " + data);
})

// 비동기 함수는 받아와서 쓸 수 없고, 콜백 함수 내에서만 사용 가능 -> 아래와 같이 사용 못 함 = 에러
// let ad = readFile('sample.txt', (err) => {
//     if(err) throw err;
// })

// console.log("2 ==> " + ad);

console.log(33333333333333);

// 따라서 출력 순서는
/*
1
33333333333333
2 ==> <sample.txt 파일의 내용>
*/
import { readFileSync, readFile} from 'node:fs';

console.log(1);
// 동기함수는 실행 되는 걸 기다렸다가 데이터를 할당
// const data = readFileSync('sample.txt');
// console.log(data);
// console.log(222222222);


// 비동기 함수는 일단 다른 거 먼저 하고 처리되는 대로 반여
readFile('sample.txt', (err, data) => {
    if(err) throw err;
    console.log("2 ==> " +data);
})

console.log(33333333333333);

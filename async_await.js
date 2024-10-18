// 비동기 함수로 리턴값의 데이터 타입 = promise
async function f1() {
    return 1; // Promise.resolve(1) 과 동일하게 처리
}

// .then()을 통해 값을 받는 콜백이 실행 = 비동기적으로 처리
f1().then((value) => console.log(value));

// 동기 함수 호출 즉시 반환
function f2() {
    return 2;
}

let value = f2();
console.log(value)

// 비동기 함수로, 내부의 Promise가 1초 후에 해결
async function f3() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!!"), 1000);
    })
    let result = await promise;
    console.log(result);
}

f3();

/* 따라서 최종 출력
2
1
done!!
*/


/**
 * await는 비동기 함수 내에서 사용되는 키워드
 * 프로미스가 해결될때까지 함수 실해을 중지했다가 프로미스가 해결되면 결과값을 반환받음
 * 그래서 동기 코드처럼 작성 가능, 즉 프로미스가 해결되기 전까지 다음 코드를 실행하지 않고 긷림
 */
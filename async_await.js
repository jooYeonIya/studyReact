async function f1() {
    return 1;
}

// 리턴값의 데이터 타입 = promise
f1().then((value) => console.log(value));

function f2() {
    return 2;
}

let value = f2();
console.log(value)

// 2가 먼저 출력 = 비동기적으로 실행되기 때문에 

async function f3() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!!"), 1000);
    })
    let result = await promise;
    console.log(result);
}

f3();
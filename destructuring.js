let student = {
    name:"hong",
    score: 90,
    age: 100,
    birth: "990101"
}

// let name = student.name;

// 위치는 상관 없고 객체의 이름과 같으면 됨
let {name} = student;

// 일부만 떼어와서 사용할 수도 있음
let {age, birth, score} = student;

console.log(name);

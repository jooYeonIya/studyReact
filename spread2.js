let student1 = {
    name: "hong",
    score: 90
}

let student2 = student1;
console.log(student1 == student2); // true 

student2.age = 20;
console.log(student1); 
console.log(student2); // 둘 동일하게 나옴 = 사이드이펙트 발생

let student3 = {...student1};
console.log(student1 == student3); // false 값만 복사해기 때문에

student3.shcool = "kosta";
console.log(student1); 
console.log(student2);
console.log(student3); // shcool은 여기에만 추가 됨 
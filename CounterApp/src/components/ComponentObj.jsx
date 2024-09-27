export default function ComponentObj() {
    const name = "hong";
    const student = {
        id: 0,
        name,
        score: 90
    }

    // {student} 라고 쓸 수 없음
    // Objects are not valid as a React child (found: object with keys id, name, score). 
    // If you meant to render a collection of children, use an array instead
    return (
        <>
            <h2>학생 아이디 {student.id}</h2>
        </>
    )
}

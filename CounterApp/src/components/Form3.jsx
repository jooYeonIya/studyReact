export default function Form3({student, changeValue}) {
    console.log(student);
    return (
        <>
        {/* 서버 관련된 작업은 name을 쓰는 게 더 좋다
        id는 태그 내에서 쓰는 게 더 좋고? */}
            <label htmlFor="id">id</label><input type="text" value={student.id} id="id" name="id" onChange={changeValue}/>
            <label htmlFor="name">name</label><input type="text" value={student.name} id="name" name="name" onChange={changeValue}/>
            <label htmlFor="score">score</label><input type="text" value={student.score} id="score" name="score" onChange={changeValue} />
            <label htmlFor="age">age</label><input type="text" value={student.age} id="age" name="age" onChange={changeValue}/>
            <label htmlFor="shcool">shcool</label><input type="text" value={student.shcool} id="shcool" name="shcool" onChange={changeValue}/>
        </>
    )
}
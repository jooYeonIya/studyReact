export default function Form2({student, addAge}) {
    console.log(student);
    return (
        <>
            <label htmlFor="id">id</label><input type="text" value={student.id} id="id" />
            <label htmlFor="id">name</label><input type="text" value={student.name} id="id"/>
            <label htmlFor="id">score</label><input type="text" value={student.score} id="id" />
            <label htmlFor="id">age</label><input type="text" value={student.age} id="id" onChange={addAge}/>
        </>
    )
}
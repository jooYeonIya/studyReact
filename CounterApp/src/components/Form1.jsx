export default function Form1({student, changescore}) {
    return (
        <>
            <label htmlFor="id">id</label><input type="text" value={student.id} id="id" />
            <label htmlFor="id">name</label><input type="text" value={student.name} id="id"/>
            <label htmlFor="id">score</label><input type="text" value={student.score} id="id" onChange={changescore}/>
        </>
    )
}
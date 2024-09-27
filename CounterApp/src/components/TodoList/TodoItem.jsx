export default function TodoItem({it, deleteTodo}) {
    let submit = () => {
        deleteTodo(it.id);
    }
    return (
        <>
            <input type="checkbox" />
            <div>{it.content}</div>
            <div>{new Date().toLocaleDateString}</div>
            <button onClick={submit}>삭제</button>
        </>
    )
}
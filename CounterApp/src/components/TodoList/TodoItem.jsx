export default function TodoItem({it}) {
    return (
        <>
            <input type="checkbox" />
            <div>{it.content}</div>
            <div>{new Date().toLocaleDateString}</div>
            <button>삭제</button>
        </>
    )
}
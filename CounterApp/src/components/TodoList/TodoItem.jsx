export default function TodoItem() {
    return (
        <>
            <input type="checkbox" />
            <div>할 일</div>
            <div>{new Date().toLocaleDateString}</div>
            <button>삭제</button>
        </>
    )
}
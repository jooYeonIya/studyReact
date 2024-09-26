function Input({text, func}) {
    return (
        <>
            <input type="text" value={text} onChange={func} />
        </>
    )
}

export default Input;
function ShareButton(props) {
    return (
        <>
            <button style={props.style} onClick={props.showAlert}>{props.text}</button>
        </>
    )
}

export default ShareButton;
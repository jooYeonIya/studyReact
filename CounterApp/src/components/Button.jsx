function Button(props) {
    return (
    <button onClick={props.countUpNDown}>
        {props.text}
    </button>
  )
}

export default Button;
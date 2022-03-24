const Button = (props) => {

    return (
        <button className={props.type} onclick={props.func}> {props.label} </button>
    )

}

export default Button


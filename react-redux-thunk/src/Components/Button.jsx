const Button = ({buttonLabel, clickHandler}) => {
    return(
        <button onClick={clickHandler}>{buttonLabel}</button>
    )

}

export default Button;
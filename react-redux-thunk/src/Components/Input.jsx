



const Input = ({name, type, placeholder, changeHandler}) => {

    const inputChange = (e) => {
        changeHandler(e);
    }
    
    return(
        <input type={type} name={name} placeholder={placeholder} onChange={(event) => inputChange(event)} />
    )

}

export default Input;
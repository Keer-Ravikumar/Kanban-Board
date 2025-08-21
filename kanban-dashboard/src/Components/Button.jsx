function Button(props){

    return (
        <button onClick={props.onClick} className= {props.className + " button-class"} >{props.nameProp}</button>
    )


}

export default Button
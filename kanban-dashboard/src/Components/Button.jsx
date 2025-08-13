function Button(props){

    return (
        <button onClick={props.onClick} className="button-class">{props.nameProp}</button>
    )


}

export default Button
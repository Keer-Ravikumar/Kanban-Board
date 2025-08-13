import Button from "./Button";

function InputTask(props){

    return (
        <div className="inputContainer">
            <div className="input-group">
                <input type="text" className="taskInputField"/>
                <Button 
                    nameProp="➕"
                />
            </div>
                <ul>
                    {props.taskProp.map( (task, index) => (
                    <div className="tasks-container">
                        <li className="listItem" key={index}> {task} </li> 
                        <div className="button-group">
                            <Button nameProp = "❌" />
                            <Button nameProp = "⬆️" />
                            <Button nameProp = "⬇️" />
                        </div>
                    </div> 
                    ) ) }
                </ul>
                
        </div>
    )

}

export default InputTask
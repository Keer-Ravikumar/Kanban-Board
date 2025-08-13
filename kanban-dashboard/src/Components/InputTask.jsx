import Button from "./Button";
import {useState} from "react";

function InputTask(props){

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleInputChange(event){
        setTask(event.target.value);
        // console.log(task);
    }

    function handleAdd(){
        setTasks([...tasks, task]);
        setTask("");
    }

    function deleteTask(index){
        const updatedTask = tasks.filter( (_, i) => (index !== i) );
        setTasks(updatedTask);
    }

    function moveUp(index){
        if (index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index - 1], updatedTask[index]] = [updatedTask[index], updatedTask[index - 1]]
            setTasks(updatedTask);
            console.log("hi")
        }
    }

    function moveDown(index){
            const updatedTask = [...tasks];
            if (index < updatedTask.length - 1){
            [updatedTask[index], updatedTask[index  + 1]] = [updatedTask[index + 1], updatedTask[index]]
            setTasks(updatedTask);
            console.log("hello")
        }
    }

    return (
        <div className="inputContainer">
            <div className="input-group">
                <input type="text" className="taskInputField" onChange={handleInputChange} value={task}/>
                <Button 
                    onClick = {handleAdd}
                    nameProp="➕"
                />
            </div>
                <ul>
                    {tasks.map( (task, index) => (
                    <div className="tasks-container">
                        <li className="listItem" key={index}> {task} </li> 
                        <div className="button-group">
                            <Button nameProp = "❌" onClick={ () => deleteTask(index) }/>
                            <Button nameProp = "⬆️" onClick={ () => moveUp(index) }/>
                            <Button nameProp = "⬇️" onClick={ () => moveDown(index) }/>
                        </div>
                    </div> 
                    ) ) }
                </ul>
                
        </div>
    )

}

export default InputTask
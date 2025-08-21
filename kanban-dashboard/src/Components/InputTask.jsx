import Button from "./Button";
import {useState} from "react";

function InputTask(){

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleInputChange(event){
        setTask(event.target.value);
        // console.log(task);
    }

    function handleAdd(){
        if(task){
            setTasks([...tasks, task]);
            setTask("");
        } else {
            alert("Type in a task!");
        }
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
                <input type="text" placeholder="Add a Task.." className="taskInputField" onChange={handleInputChange} value={task}/>
                <Button 
                    className = "add-task"
                    onClick = {handleAdd}
                    nameProp="I got this 💪🏻"
                />
            </div>
            <ul>
                    {tasks.map( (task, index) => (
                    <div className="tasks-container">
                        <li className="listItem" key={index}> {task} </li> 
                        <div className="button-group">
                            {/* <Button nameProp = "✅" onClick={ () => doneTask(task) }/> */}
                            <Button nameProp = "⬆️" onClick={ () => moveUp(index) }/>
                            <Button nameProp = "⬇️" onClick={ () => moveDown(index) }/>
                            <Button nameProp = "🗑️" onClick={ () => deleteTask(index) }/>
                        </div>
                    </div> 
                    ) ) }
                </ul>
                

                {/* TODO Add button group as another component - Not required because not resused anywhere
                    TODO Add a local Storage  
                    TODO Change the UI*/}
                
        </div>
    )

}

export default InputTask
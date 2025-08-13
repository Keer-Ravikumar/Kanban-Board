import { useState } from 'react';
import Heading from './Heading'
import InputTask from './InputTask';

function Todo(){

    const tasks = ["Buy Milk", "Buy Milk", "Buy Milk", "Write Resume", "Tailor Cover Letter", "Aliquip duis amet voluptate do eiusmod."]

    return (
        <div className="container">

            <Heading />
            <InputTask 
                taskProp = {tasks}
            />

        </div>
    )

}

export default Todo;
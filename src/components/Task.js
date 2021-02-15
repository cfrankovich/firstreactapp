import { FaTimes } from 'react-icons/fa' // "npm i react-icons"

const Task = ({task, onDeleteTasks, onToggle}) => {
    return (
        // work way back up from onClick
        // its like setting variables and params over and over until its down here
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes onClick={() => onDeleteTasks(task.id)} style={{color: 'red', cursor: 'pointer'}}/></h3>
            <p>{task.day}</p>
        </div>
    )
    // onClick={() => onDeleteTasks(task.id)}
    // on the click we make a function which points to onDeleteTasks(task.id)
    // this makes it so we can pass something into the param
    // if we dont have the '()=>' passing parameters wont work since we set 
    // onDeleteTasks = to a function variable (const deleteTask in App.js)

    // and here we are, we are taking task and then getting the text attribute
}

export default Task

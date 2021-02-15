import Task from './Task'

const Tasks = ({tasks, onDeleteApp, onToggle}) => {
    return (
        <>
          {tasks.map((task) => ( // instead of { we use ( because we want to return jsx
            <Task key={task.id} task={task} onDeleteTasks={onDeleteApp} onToggle={onToggle} />
          ))}  
        </>
    )
    // Above we are looping through the tasks prop
    // then we use the Task.js component and pass it the key (needed) & task
    // If you remember mapping it looks like this...
    // arr = [1, 3, 5, 7]
    // arr.map((elem) => {somecode})
    // Instead of the {} we use () to return jsx instead of a function
}

export default Tasks

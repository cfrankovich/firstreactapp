import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  // states should be at the top level
  // const [name, setStuffName] = useState([{obj1}, {obj2}, ...])
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Fix House',
      day: 'Feb 12th at 10:45am',
      reminder: false,
    },
    {
      id: 2,
      text: 'Doctors Appointment for balls',
      day: 'Feb 16th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Homework',
      day: 'Feb 19th at 1:10pm',
      reminder: false,
    }
  ])
  const name = 'Carson';
  const x = true;

  // Add Task
  const addTask = (task) => {
    console.log('bruh!')
    console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id)
    const newTask = {id, ...task} // the ...task passes everything from task (text, date, reminder)
    setTasks([...tasks, newTask]) // sets the tasks from everything there + the new task
  }

  // Delete Task : We are making a deleteTask function taking in a id param
  // scroll down and go thru the components to see how deleteTask is passedDown
  // see how we can customize the name? 
  const deleteTask = (id) => {
    console.log('delete', id)
    // setTasks is how we deal with the immutable state
    // tasks.filter((task) => task.id !== id) 
    // takes our tasks then filters it
    // we filter it using a foreach thing
    // each task in tasks 
    // if the task.id doesnt equal the param id,
    // discard it so tasks only equals the ones with the param id
    // look up .filter() js 
    // filters out the ones that are false
    // takes a function as its parameter
    // i could also do this >>>
    // function isEqual(task) { return (task.id == id) }
    // tasks.filter(isEqual(task))
    // i think.......
    setTasks(tasks.filter((task) => (
      task.id !== id
    )))
    // sets the tasks to the filtered tasks
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => (
      task.id === id ? {...task, reminder: !task.reminder} : task
    )))
    // setTasks so we modify,
    // tasks.map modifies elements
    // then we take each task obj and modify it
    // map ( (task) => {  } )
    // { if the task id == id then set reminder = !reminder else, just leave the task as is }
    // arrow functions with () return 
    // arrow functions with {} is a function
  }

  return (
    <div className='container'>
      <Header title='Task Tracker' showAddTask={showAddTask} onAdd={() => setShowAddTask(!showAddTask)}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDeleteApp={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
      {showAddTask && <AddTask onAdd={addTask}/>}
    </div>
    // jsx can only take one parent component instead of div you can do <> </> if you dont want a div
    // {x ? 'Task when true' : 'Task when false'}  
    // use {} for js

    // var x = 10
    // console.log(x > 5 ? 'greater!' : 'smaller!') - prints greater
    // easy way to do if else statements
  );
}

export default App;

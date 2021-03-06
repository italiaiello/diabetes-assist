import React from 'react';
import TaskTick from '../../images/Tick.svg'

const ListItems = props => {

    console.log(props.todoTasks)

    const removeItem = taskToDelete => {
        let newTasks = props.todoTasks.slice()
        newTasks = newTasks.filter(task => task !== taskToDelete)
        props.setTodoTasks(newTasks)
    }

    const listItems = props.todoTasks === null ?
        <p id="noTasksMessage">Nothing to do yet</p>
        :
        props.todoTasks.map((task, i) => {
            return (
                <div className="list" key={i}>
                    <div className="circleButton" onClick={() => removeItem(task)}>
                        <figure className="tickIcon">
                            <img src={TaskTick} alt="Task ticked off" />
                        </figure>
                    </div>
                    <p>{task}</p>
                </div>
            )
        })
    

    return (
        <div id="thingsToDo">{listItems}</div>
    )
}

export default ListItems;
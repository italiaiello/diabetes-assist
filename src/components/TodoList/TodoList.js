import React, { useState } from 'react';
import ListItems from './ListItems'

const TodoList = props => {

    const [currentItem, setCurrentItem] = useState('')

    const handleInput = e => {
        console.log(e.target.value)
        setCurrentItem(e.target.value)
    }

    const addItem = () => {
        if (currentItem !== "") {
            if (props.todoTasks !== null) {
                const newItems = props.todoTasks.slice()
                newItems.push(currentItem)
                props.setTodoTasks(newItems)
            } else {
                const newItem = [currentItem]
                props.setTodoTasks(newItem)
            }
        }
        setCurrentItem('')
        console.log(props.todoTasks)
    }

    const searchWithEnterKey = (e) => {
        let code = (e.keyCode ? e.keyCode : e.which);
        if(code === 13) { //Enter keycode
            addItem();
        }
    }

    return (
        <div>
            <ListItems todoTasks={props.todoTasks} setTodoTasks={props.setTodoTasks}/>
            <article id="addTask">
                <button type="submit" onClick={addItem}>+</button>
                <input type="text" onKeyPress={searchWithEnterKey} placeholder="Add a task" 
                    value={currentItem} onChange={handleInput}
                />
            </article>
        </div>
    )
}

export default TodoList;
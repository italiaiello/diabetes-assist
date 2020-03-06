import React, { useState } from 'react';
import ListItems from './ListItems'

const TodoList = props => {

    const [currentItem, setCurrentItem] = useState('')

    const handleInput = e => {
        setCurrentItem(e.target.value)
    }

    const addItem = () => {
        if (currentItem !== "") {
            const newItems = [...props.todoTasks, currentItem];
            props.setTodoTasks(newItems);
            setCurrentItem('')
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
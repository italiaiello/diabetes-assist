import React, { useState } from 'react';
import ListItems from './ListItems'

const TodoList = () => {

    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState({text: '', key: ''})

    const handleInput = e => {
        setCurrentItem({text: e.target.value, key: Date.now()})
    }

    const addItem = () => {
        const newItem = currentItem;
        console.log(newItem)
        if (newItem.text !== "") {
            const newItems = [...items, newItem];
            setItems(newItems);
            setCurrentItem({
                text: '',
                key: ''
            })
        }
        setCurrentItem({text: '', key: ''})
    }

    const searchWithEnterKey = (e) => {
        let code = (e.keyCode ? e.keyCode : e.which);
        if(code === 13) { //Enter keycode
            addItem();
        }
    }

    return (
        <div>
            <ListItems items={items}/>
            <article id="addTask">
                <button type="submit" onClick={addItem}>+</button>
                <input type="text" onKeyPress={searchWithEnterKey} placeholder="Enter text" 
                    value={currentItem.text} onChange={handleInput}
                />
            </article>
        </div>
    )
}

export default TodoList;
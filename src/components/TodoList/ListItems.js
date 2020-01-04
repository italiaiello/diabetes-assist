import React from 'react';

const ListItems = props => {

    console.log(props.todoTasks)

    const listItems = props.todoTasks.map((task, i) => {
        return (
            <div className="list" key={i}>
                <div className="circleButton"></div>
                <p>{task}</p>
            </div>
        )
    })

    return (
        <div id="thingsToDo">{listItems}</div>
    )
}

export default ListItems;
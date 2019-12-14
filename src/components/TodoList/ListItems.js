import React from 'react';

const ListItems = props => {

    console.log(props.items)

    const listItems = props.items.map(item => {
        return (
            <div className="list" key={item.key}>
                <div class="circleButton"></div>
                <p>{item.text}</p>
            </div>
        )
    })

    return (
        <div id="thingsToDo">{listItems}</div>
    )
}

export default ListItems;
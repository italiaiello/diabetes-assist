import React from 'react'

const TimeSlot = props => {
    return (
        <article className="timeAvailable">
            <div className="timeSlot"></div>
            <p>{props.time}</p>
        </article>
    )
}

export default TimeSlot
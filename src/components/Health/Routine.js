import React from 'react';

const Routine = props => {

    return (
        <article>
            <div className="routineDay">
                <h2>{props.dayOfWeek}</h2>
                <p>{props.medication}</p>
                <p>{props.medication}</p>
            </div>
        </article>
    )
}

export default Routine;
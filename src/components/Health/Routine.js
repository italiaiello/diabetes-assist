import React from 'react';

const Routine = props => {

    return (
        <article>
            <div className="routineDay">
                <h2>{props.dayOfWeek}</h2>
                {
                    props.routine.map(medication => {
                        return (
                            <p>{medication}</p>
                        )
                    })
                }
            </div>
        </article>
    )
}

export default Routine;
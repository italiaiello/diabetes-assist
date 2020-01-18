import React from 'react'
import Routine from './Routine'
import './RoutineEdit.css'

const RoutineEdit = ({toggleModal, daysOfWeek, routine} ) => {
    return (
        <article className="editRoutine-modal">
            <article className="modal-container">
                <div className="modal-heading">
                    <h2>Your Medication Routine</h2>
                    <button className="modal-close" onClick={toggleModal}>&times;</button>
                </div>
                <div className="currentRoutine">
                {
                    daysOfWeek.map((day, i) => {
                        return (
                            <Routine 
                                key={i}
                                dayOfWeek={day}
                                routine={routine[i]}
                            />
                        )
                    })
                }
                </div>
                <div className="modal-buttons">
                    <button className="modal-cancel" onClick={toggleModal}>Cancel</button>
                    <button className="modal-save">Save</button>
                </div>
            </article>
        </article>
    )
}

export default RoutineEdit
import React from 'react'
import './RoutineEdit.css'

const RoutineEdit = ({ isProfileOpen, toggleModal }) => {
    return <div className="editRoutine-modal">
            <button onClick={toggleModal}>Click</button>
        </div>
}

export default RoutineEdit
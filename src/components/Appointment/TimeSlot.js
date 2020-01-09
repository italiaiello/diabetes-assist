import React, { useState } from 'react'

const TimeSlot = props => {
    
    const apptTime = props.time - 12 < 0 ? `${props.time}:00AM` : `${props.time}:00PM`

    const [timeSelected, setTimeSelected] = useState(false)

    const onTimeSlotSelect = () => {
        if (timeSelected) {
            setTimeSelected(false)
            props.setTimeSlot("")
        } else {
            props.setTimeSlot(apptTime)
            setTimeSelected(true)
        }
        
    }

    return (
        <article className={props.availability === "Yes" ? "available timeAvailable" : "not-available timeAvailable"}>
            <div className={timeSelected ? "timeSlot slotSelected" : "timeSlot"}
                onClick={onTimeSlotSelect}
            ></div>
            <p>{apptTime}</p>
        </article>
    )
}

export default TimeSlot
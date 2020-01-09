import React, { useState } from 'react'
import TimeSlot from './TimeSlot'
import HealthProfessionals from '../../json/test.json'

const SelectTime = props => {

    const professionalsArray = Object.values(HealthProfessionals[props.professionalId - 1].availableTimes)
    const timeSlots = [10, 11, 12, 1, 2, 3, 4]


    return (
        <div id="timeSelect">
            {
                professionalsArray.map((available, i) => {
                    return (
                        available === "Yes" ?
                        <TimeSlot key={i} availability={available} 
                                        time={timeSlots[i]} 
                                        setTimeSlot={props.setTimeSlot}
                        />
                        :
                        <TimeSlot key={i} availability={available} 
                                        time={timeSlots[i]} 
                                        setTimeSlot={props.setTimeSlot}
                        />
                    )
                })
            }
        </div>
    )
}

export default SelectTime
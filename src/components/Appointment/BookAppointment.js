import React, { useState } from 'react'
import Calendar from '../../images/calendar.svg'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

const BookAppointment = props => {

    const [startDate, setStartDate] = useState(new Date());

    console.log(startDate)

    return (
        <article className="pageDisplay">
            <div className="backAndHeading">
                <div className="sectionHeading">
                    <div className="back">
                        <div className="leftArrow" onClick={props.onRouteChange.bind(this, 'appointment')}></div>
                        <p>Back</p>
                    </div>
                    <h1>My Health</h1>
                </div>
            </div>
            <div id="dateSelection">
                <figure>
                    <img src="hello" alt="Camille Green" />
                    <p>Camille Green</p>
                </figure>
                <div id="selectDate">
                    <div className="leftArrow" onClick={props.onRouteChange.bind(this, 'home')}></div>
                    <p>{Date.now()}</p>
                    <div className="rightArrow" onClick={props.onRouteChange.bind(this, 'home')}></div>
                </div>
                <label>
                    <DatePicker
                        id="datePicker"
                        showPopperArrow={false}
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        dateFormat="MMMM d, yyyy"
                    />
                    <figure>
                        <img src={Calendar} alt="Calendar button" />
                    </figure>
                </label>
            </div>
            <button>Submit Stuff</button>
        </article>
    )
}

export default BookAppointment
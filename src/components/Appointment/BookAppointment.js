import React, { useState } from 'react'
import Calendar from '../../images/calendar.svg'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

const BookAppointment = props => {

    const [startDate, setStartDate] = useState(new Date());

    let newDate = new Intl.DateTimeFormat('en-AU', {
        month: 'long',
        weekday: 'long',
        day: '2-digit'
    }).format(startDate)

    const [dateText, setDateText] = useState(newDate);
    console.log(dateText)

    const handleDateIncrement = () => {
        startDate.setDate(startDate.getDate() + 1)
        newDate = new Intl.DateTimeFormat('en-AU', {
            month: 'long',
            weekday: 'long',
            day: '2-digit'
        }).format(startDate)
        setDateText(newDate)
    }

    const handleDatePick = date => {
        setStartDate(date)
        console.log(date)
        newDate = new Intl.DateTimeFormat('en-AU', {
            month: 'long',
            weekday: 'long',
            day: '2-digit'
        }).format(startDate)
        setDateText(newDate)
    }

    

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
                    <div className="leftArrow" onClick={handleDateIncrement}></div>
                    <p>{dateText}</p>
                    <div className="rightArrow" onClick={handleDateIncrement}></div>
                </div>
                <label>
                    <DatePicker
                        id="datePicker"
                        showPopperArrow={false}
                        selected={startDate}
                        onChange={date => handleDatePick(date)}
                        dateFormat="dddd, MM yyyy"
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